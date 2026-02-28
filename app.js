// --- Simulated Database (Rates for 2026) ---
const db = {
    regions: ['islamabad', 'lahore', 'karachi'],
    rates: {
        islamabad: {
            materials: [
                { id: 'm1', name: 'Steel (Deformed Grade 60)', unit: 'Ton', rate: 265000 },
                { id: 'm2', name: 'Cement (OPC)', unit: 'Bag', rate: 1250 },
                { id: 'm3', name: 'Sand (Ravi/Chenab)', unit: 'Cft', rate: 45 },
                { id: 'm4', name: 'Crush (Margalla)', unit: 'Cft', rate: 135 },
                { id: 'm5', name: 'Asphalt (Bitumen 60/70)', unit: 'Ton', rate: 155000 },
                { id: 'm6', name: 'Bricks (First Class)', unit: '1000 No.', rate: 16000 }
            ],
            labor: [
                { id: 'l1', name: 'Mason (Skilled)', unit: 'Day', rate: 2500 },
                { id: 'l2', name: 'Carpenter/Steel Fixer', unit: 'Day', rate: 2600 },
                { id: 'l3', name: 'Helper (Unskilled)', unit: 'Day', rate: 1500 },
                { id: 'l4', name: 'Machine Operator', unit: 'Day', rate: 3500 },
                { id: 'l5', name: 'Plumber/Electrician', unit: 'Day', rate: 2800 }
            ],
            equipment: [
                { id: 'e1', name: 'Excavator (Crawler)', unit: 'Hour', rate: 4500 },
                { id: 'e2', name: 'Transit Mixer', unit: 'Trip', rate: 8000 },
                { id: 'e3', name: 'Motor Grader', unit: 'Hour', rate: 5500 },
                { id: 'e4', name: 'Vibratory Roller', unit: 'Day', rate: 25000 },
                { id: 'e5', name: 'Crane (25 Ton)', unit: 'Day', rate: 35000 }
            ]
        },
        lahore: {
            // Slight variations for Lahore
            materials: [
                { id: 'm1', name: 'Steel (Deformed Grade 60)', unit: 'Ton', rate: 263000 },
                { id: 'm2', name: 'Cement (OPC)', unit: 'Bag', rate: 1230 },
                { id: 'm3', name: 'Sand (Ravi)', unit: 'Cft', rate: 35 },
                { id: 'm4', name: 'Crush (Sargodha)', unit: 'Cft', rate: 120 },
                { id: 'm5', name: 'Asphalt (Bitumen 60/70)', unit: 'Ton', rate: 153000 },
                { id: 'm6', name: 'Bricks (First Class)', unit: '1000 No.', rate: 14500 }
            ],
            labor: [
                { id: 'l1', name: 'Mason (Skilled)', unit: 'Day', rate: 2400 },
                { id: 'l2', name: 'Carpenter/Steel Fixer', unit: 'Day', rate: 2500 },
                { id: 'l3', name: 'Helper (Unskilled)', unit: 'Day', rate: 1400 },
                { id: 'l4', name: 'Machine Operator', unit: 'Day', rate: 3200 },
                { id: 'l5', name: 'Plumber/Electrician', unit: 'Day', rate: 2600 }
            ],
            equipment: [
                { id: 'e1', name: 'Excavator (Crawler)', unit: 'Hour', rate: 4200 },
                { id: 'e2', name: 'Transit Mixer', unit: 'Trip', rate: 7500 },
                { id: 'e3', name: 'Motor Grader', unit: 'Hour', rate: 5000 },
                { id: 'e4', name: 'Vibratory Roller', unit: 'Day', rate: 22000 },
                { id: 'e5', name: 'Crane (25 Ton)', unit: 'Day', rate: 32000 }
            ]
        },
        karachi: {
            materials: [
                { id: 'm1', name: 'Steel (Deformed Grade 60)', unit: 'Ton', rate: 268000 },
                { id: 'm2', name: 'Cement (OPC)', unit: 'Bag', rate: 1280 },
                { id: 'm3', name: 'Sand (Bholari)', unit: 'Cft', rate: 55 },
                { id: 'm4', name: 'Crush (Hub)', unit: 'Cft', rate: 145 },
                { id: 'm5', name: 'Asphalt (Bitumen 60/70)', unit: 'Ton', rate: 158000 },
                { id: 'm6', name: 'Block (Solid Concrete)', unit: 'No.', rate: 65 }
            ],
            labor: [
                { id: 'l1', name: 'Mason (Skilled)', unit: 'Day', rate: 2800 },
                { id: 'l2', name: 'Carpenter/Steel Fixer', unit: 'Day', rate: 2900 },
                { id: 'l3', name: 'Helper (Unskilled)', unit: 'Day', rate: 1600 },
                { id: 'l4', name: 'Machine Operator', unit: 'Day', rate: 4000 },
                { id: 'l5', name: 'Plumber/Electrician', unit: 'Day', rate: 3000 }
            ],
            equipment: [
                { id: 'e1', name: 'Excavator (Crawler)', unit: 'Hour', rate: 5000 },
                { id: 'e2', name: 'Transit Mixer', unit: 'Trip', rate: 9000 },
                { id: 'e3', name: 'Motor Grader', unit: 'Hour', rate: 6000 },
                { id: 'e4', name: 'Vibratory Roller', unit: 'Day', rate: 28000 },
                { id: 'e5', name: 'Crane (25 Ton)', unit: 'Day', rate: 40000 }
            ]
        }
    },
    projects: {
        residential: { baseRateSqFt: 5000, breakdown: { Material: 60, Labor: 25, Equipment: 5, Overhead: 10 } },
        commercial:  { baseRateSqFt: 6500, breakdown: { Material: 55, Labor: 20, Equipment: 10, Overhead: 15 } },
        flexible_road: { baseRateSqFt: 45000, isPerKm: true, breakdown: { Subgrade: 10, Subbase: 15, Base: 20, Asphalt: 45, Drainage: 10 } },
        rigid_road: { baseRateSqFt: 43500, isPerKm: true, breakdown: { Subgrade: 15, PQC: 70, Joints: 5, Drainage: 10 } } // Note: baseRateSqFt here is literally thousands per km (e.g. 43,500 * 1000 = 43.5M)
    }
};

let currentRegion = 'islamabad';
let chartsInstance = {};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initSelectListeners();
    renderTables();
    initCharts();
    initGSAPAnimations();
    initCalculator();
    initFilter();
    
    // Set parallax image dynamically (or random high quality unslash)
    document.getElementById('main-bg').style.backgroundImage = "url('https://images.unsplash.com/photo-1541888086425-d71bb192a1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')";
});

// --- Table Rendering Functions ---
function formatCurrency(amount) {
    return amount.toLocaleString('en-PK');
}

function renderTables() {
    const data = db.rates[currentRegion];
    
    const matTbody = document.querySelector('#table-materials tbody');
    matTbody.innerHTML = data.materials.slice(0, 5).map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${item.unit}</td>
            <td class="text-accent-blue font-weight-bold">${formatCurrency(item.rate)}</td>
        </tr>
    `).join('');

    const labTbody = document.querySelector('#table-labor tbody');
    labTbody.innerHTML = data.labor.slice(0, 5).map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${item.unit}</td>
            <td class="text-accent-orange font-weight-bold">${formatCurrency(item.rate)}</td>
        </tr>
    `).join('');

    const eqTbody = document.querySelector('#table-equipment tbody');
    eqTbody.innerHTML = data.equipment.slice(0, 5).map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${item.unit}</td>
            <td class="text-accent-blue font-weight-bold">${formatCurrency(item.rate)}</td>
        </tr>
    `).join('');
}

function initSelectListeners() {
    document.getElementById('region-select').addEventListener('change', (e) => {
        currentRegion = e.target.value;
        // Animate table data change
        gsap.to('.rate-table tbody', { opacity: 0, duration: 0.2, onComplete: () => {
            renderTables();
            gsap.to('.rate-table tbody', { opacity: 1, duration: 0.3 });
        }});
        updateCalculator();
    });
}

// --- Chart.js Initialization ---
function initCharts() {
    // Shared dark theme options
    Chart.defaults.color = '#94a3b8';
    Chart.defaults.font.family = "'Outfit', sans-serif";
    
    // 1. Chart within Road Panel (Doughnut)
    const ctxRoad = document.getElementById('roadCostChart').getContext('2d');
    chartsInstance.road = new Chart(ctxRoad, {
        type: 'doughnut',
        data: {
            labels: ['Asphalt', 'Base/Subbase', 'Subgrade', 'Drainage'],
            datasets: [{
                data: [45, 35, 10, 10],
                backgroundColor: ['#f97316', '#3b82f6', '#1e293b', '#64748b'],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'right', labels: { boxWidth: 12 } }
            },
            cutout: '70%'
        }
    });

    // 2. Material Distribution (Pie)
    const ctxMat = document.getElementById('materialDistributionChart').getContext('2d');
    chartsInstance.mat = new Chart(ctxMat, {
        type: 'pie',
        data: {
            labels: ['Cement', 'Steel', 'Sand/Crush', 'Bricks/Blocks', 'Misc.'],
            datasets: [{
                data: [30, 40, 15, 10, 5],
                backgroundColor: ['#3b82f6', '#1d4ed8', '#f97316', '#c2410c', '#334155'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom' } }
        }
    });

    // 3. Foundation Compare (Bar)
    const ctxFound = document.getElementById('foundationCompareChart').getContext('2d');
    chartsInstance.found = new Chart(ctxFound, {
        type: 'bar',
        data: {
            labels: ['Isolated', 'Raft / Mat', 'Pile Foundation'],
            datasets: [{
                label: 'Cost per sq.ft (Rs)',
                data: [500, 1050, 2000],
                backgroundColor: '#3b82f6',
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.05)' } }, x: { grid: { display: false } } },
            plugins: { legend: { display: false } }
        }
    });
}

// --- Calculator Logic ---
function initCalculator() {
    const calcBtn = document.getElementById('calculate-btn');
    const typeSelect = document.getElementById('proj-type');
    const unitLabel = document.getElementById('proj-unit');
    
    typeSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        if(val.includes('road')) {
            unitLabel.textContent = 'km';
        } else {
            unitLabel.textContent = 'sq.ft';
        }
    });

    calcBtn.addEventListener('click', updateCalculator);
    // Initial calculate
    updateCalculator();
}

function updateCalculator() {
    const type = document.getElementById('proj-type').value;
    const area = parseFloat(document.getElementById('proj-area').value) || 0;
    const quality = document.getElementById('proj-quality').value;
    
    const projData = db.projects[type];
    if(!projData) return;

    // Quality multiplier
    let multiplier = 1.0;
    if(quality === 'premium') multiplier = 1.3;
    if(quality === 'economy') multiplier = 0.8;

    let baseRate = projData.baseRateSqFt;
    if (projData.isPerKm) {
         // It's saved as 'thousands' in the db mock for roads to fit baseRateSqFt easily
        baseRate = projData.baseRateSqFt * 1000; 
    }

    const totalCost = baseRate * area * multiplier;
    
    // Animate numbers
    gsap.to({val: 0}, {
        val: totalCost,
        duration: 1,
        ease: "power2.out",
        onUpdate: function() {
            document.getElementById('calc-total-cost').innerHTML = `Rs ${Math.floor(this.targets()[0].val).toLocaleString('en-PK')}`;
        }
    });

    // Breakdown
    const breakdownEl = document.getElementById('calc-breakdown');
    breakdownEl.innerHTML = '';
    
    Object.entries(projData.breakdown).forEach(([key, percentage]) => {
        const val = totalCost * (percentage / 100);
        breakdownEl.innerHTML += `
            <div class="breakdown-row">
                <span>${key} (${percentage}%)</span>
                <strong>Rs ${formatCurrency(Math.floor(val))}</strong>
            </div>
        `;
    });
}

// --- Filtering Logic ---
function initFilter() {
    const chips = document.querySelectorAll('.filter-chips .chip');
    const panels = document.querySelectorAll('.interactive-panel');
    const searchBox = document.getElementById('global-search');

    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            
            const filter = chip.getAttribute('data-filter');
            
            panels.forEach(panel => {
                if(filter === 'all' || panel.getAttribute('data-category') === filter) {
                    gsap.to(panel, { display: 'flex', opacity: 1, scale: 1, duration: 0.4 });
                } else {
                    gsap.to(panel, { opacity: 0, scale: 0.9, duration: 0.4, onComplete: () => {
                        panel.style.display = 'none';
                    }});
                }
            });
        });
    });

    // Simple search filter
    searchBox.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        // Just demonstrating filtering the tables. In a real app, you'd filter the DB and re-render.
        if(val.length > 2) {
            document.querySelectorAll('.rate-table tbody tr').forEach(tr => {
                const text = tr.innerText.toLowerCase();
                tr.style.display = text.includes(val) ? '' : 'none';
            });
        } else {
            document.querySelectorAll('.rate-table tbody tr').forEach(tr => tr.style.display = '');
        }
    });
}

// --- GSAP Scroll Animations ---
function initGSAPAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax on scroll
    gsap.to('.parallax-bg', {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: true
        }
    });

    // Fade in Up Elements
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(el => {
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%", // Trigger when element is 85% from top of viewport
                toggleActions: "play none none reverse"
            }
        });
    });

    // Dashboard Items Stagger
    gsap.from('.dashboard-grid .interactive-panel', {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.2)",
        scrollTrigger: {
            trigger: ".dashboard-grid",
            start: "top 80%"
        }
    });
}

// --- Modal Handling ---
function openModal(id) {
    const modal = document.getElementById(id);
    if(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modal on click outside
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if(e.target === overlay) {
            closeModal(overlay.id);
        }
    });
});
