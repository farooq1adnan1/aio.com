/**
 * Database Schema Suggestion for Civil Engineering Rates
 * 
 * This schema is designed for a relational database (like PostgreSQL or MySQL).
 * It structures the data logically to allow for regional variations, material types,
 * labor categories, and calculated aggregates (like project templates).
 */

# Database Schema: buildrate_db

## Table: `Regions`
Stores locations to allow rates to vary geographically.
- `id` (PK, INT)
- `name` (VARCHAR, e.g., "Islamabad", "Lahore")
- `state_province` (VARCHAR)
- `country` (VARCHAR)
- `currency_code` (VARCHAR, e.g., "PKR")

## Table: `Categories`
Hierarchical categorization for materials, labor, equipment.
- `id` (PK, INT)
- `parent_id` (FK, INT, nullable - for subcategories like Materials -> Steel -> Deformed Bars)
- `type` (ENUM: 'Material', 'Labor', 'Equipment', 'Assembly')
- `name` (VARCHAR)

## Table: `Items`
The actual entities being priced.
- `id` (PK, INT)
- `category_id` (FK, INT)
- `name` (VARCHAR)
- `description` (TEXT)
- `unit_of_measurement` (VARCHAR, e.g., 'Ton', 'Bag', 'Day', 'Hour', 'Cu.M')

## Table: `Rates`
Connecting items to their costs per region. Allowing historical tracking with effective dates.
- `id` (PK, INT)
- `item_id` (FK, INT)
- `region_id` (FK, INT)
- `rate_value` (DECIMAL)
- `effective_date` (DATE)
- `is_current` (BOOLEAN)
- `source_reference` (VARCHAR)

## Table: `Assemblies` (Optional, for BOQ/Templates)
Groups of items that make up a larger structural element (e.g., 1 Cu.M of RCC 1:2:4).
- `id` (PK, INT)
- `name` (VARCHAR, e.g., "RCC Slab 1:2:4 per Cu.M")
- `description` (TEXT)
- `unit` (VARCHAR)

## Table: `Assembly_Items`
The recipe for an assembly. (e.g., 1 Cu.M RCC = X kg steel + Y bags cement + Z cft crush + labor).
- `assembly_id` (FK, INT)
- `item_id` (FK, INT)
- `quantity` (DECIMAL)

## Example Query - Getting current material rates for Islamabad:
```sql
SELECT i.name, i.unit_of_measurement, r.rate_value
FROM Items i
JOIN Categories c ON i.category_id = c.id
JOIN Rates r ON i.id = r.item_id
JOIN Regions reg ON r.region_id = reg.id
WHERE c.type = 'Material' 
  AND reg.name = 'Islamabad' 
  AND r.is_current = TRUE;
```
