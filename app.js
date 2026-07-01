const salesChannels = [
  "Instagram",
  "Facebook",
  "Shopify",
  "WooCommerce",
  "Amazon",
  "Etsy",
  "Manual",
  "Offline",
  "Other",
];

const paymentStatuses = ["Paid", "Pending", "Refunded", "Unpaid"];
const fulfillmentStatuses = ["New", "Packed", "Shipped", "Picked up", "Delivered", "On hold"];
const deliveryMethods = ["shipping", "pickup", "local delivery", "digital", "undecided"];

const today = new Date();
today.setHours(12, 0, 0, 0);

let products = [
  {
    id: "p-001",
    name: "Everyday Linen Tote",
    sku: "BAG-LIN-001",
    category: "Bags",
    photoUrl: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=300&q=80",
    description: "Soft structured tote for daily errands and market days.",
    costPrice: 12,
    salePrice: 34,
    currentStock: 18,
    lowStockThreshold: 6,
    activeSalesChannels: ["Instagram", "Shopify", "Offline"],
    lastUpdated: dateDaysAgo(2),
  },
  {
    id: "p-002",
    name: "Ceramic Pour-Over Set",
    sku: "HOME-COF-014",
    category: "Home",
    photoUrl: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=300&q=80",
    description: "Giftable coffee set with dripper, mug, and filters.",
    costPrice: 22,
    salePrice: 58,
    currentStock: 4,
    lowStockThreshold: 5,
    activeSalesChannels: ["Etsy", "Instagram", "Manual"],
    lastUpdated: dateDaysAgo(5),
  },
  {
    id: "p-003",
    name: "Digital Meal Planner",
    sku: "DIG-PLAN-022",
    category: "Digital",
    photoUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=300&q=80",
    description: "Printable weekly meal planner and shopping list bundle.",
    costPrice: 1,
    salePrice: 12,
    currentStock: 999,
    lowStockThreshold: 20,
    activeSalesChannels: ["Etsy", "Shopify", "Other"],
    lastUpdated: dateDaysAgo(1),
  },
  {
    id: "p-004",
    name: "Handmade Soy Candle",
    sku: "CND-SOY-009",
    category: "Home fragrance",
    photoUrl: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=300&q=80",
    description: "Small-batch candle in amber glass with cotton wick.",
    costPrice: 6,
    salePrice: 19,
    currentStock: 0,
    lowStockThreshold: 8,
    activeSalesChannels: ["Facebook", "Instagram", "Offline"],
    lastUpdated: dateDaysAgo(34),
  },
  {
    id: "p-005",
    name: "Market Day Apron",
    sku: "APR-CAN-006",
    category: "Apparel",
    photoUrl: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=300&q=80",
    description: "Durable canvas apron with deep pockets.",
    costPrice: 14,
    salePrice: 42,
    currentStock: 7,
    lowStockThreshold: 7,
    activeSalesChannels: ["Amazon", "Shopify", "Offline"],
    lastUpdated: dateDaysAgo(13),
  },
  {
    id: "p-006",
    name: "Botanical Note Cards",
    sku: "PPR-NOT-031",
    category: "Paper goods",
    photoUrl: "https://images.unsplash.com/photo-1517971129774-8a2b38fa128e?auto=format&fit=crop&w=300&q=80",
    description: "Pack of eight illustrated note cards with envelopes.",
    costPrice: 4,
    salePrice: 16,
    currentStock: 32,
    lowStockThreshold: 10,
    activeSalesChannels: ["Etsy", "Instagram", "WooCommerce"],
    lastUpdated: dateDaysAgo(26),
  },
  {
    id: "p-007",
    name: "Small Batch Chili Oil",
    sku: "FOOD-CHI-018",
    category: "Food",
    photoUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=300&q=80",
    description: "Spicy condiment with garlic, sesame, and crisp aromatics.",
    costPrice: 5,
    salePrice: 15,
    currentStock: 3,
    lowStockThreshold: 9,
    activeSalesChannels: ["Manual", "Offline", "Facebook"],
    lastUpdated: dateDaysAgo(32),
  },
  {
    id: "p-008",
    name: "Minimal Desk Calendar",
    sku: "PPR-CAL-044",
    category: "Paper goods",
    photoUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=300&q=80",
    description: "A clean monthly desk calendar for planning launches.",
    costPrice: 3,
    salePrice: 14,
    currentStock: 21,
    lowStockThreshold: 6,
    activeSalesChannels: ["WooCommerce", "Shopify", "Manual"],
    lastUpdated: dateDaysAgo(3),
  },
];

let orders = [
  order("o-1001", "Avery Brooks", "p-001", 2, "Instagram", dateDaysAgo(0), "Paid", "Packed", "shipping", "DM order, ship together."),
  order("o-1002", "Lena Park", "p-003", 1, "Etsy", dateDaysAgo(0), "Paid", "Delivered", "digital", "Auto-delivered PDF."),
  order("o-1003", "Nora Patel", "p-002", 1, "Instagram", dateDaysAgo(1), "Paid", "New", "pickup", "Pickup Thursday."),
  order("o-1004", "Mateo Silva", "p-005", 1, "Amazon", dateDaysAgo(2), "Paid", "Shipped", "shipping", "Standard label."),
  order("o-1005", "Jules Kim", "p-007", 2, "Offline", dateDaysAgo(3), "Paid", "Picked up", "pickup", "Farmers market sale."),
  order("o-1006", "Priya Singh", "p-006", 3, "WooCommerce", dateDaysAgo(4), "Pending", "On hold", "shipping", "Awaiting payment confirmation."),
  order("o-1007", "Sam Rivera", "p-004", 1, "Facebook", dateDaysAgo(5), "Paid", "New", "local delivery", "Waitlist item, out of stock risk."),
  order("o-1008", "Morgan Lee", "p-008", 2, "Shopify", dateDaysAgo(6), "Paid", "Delivered", "shipping", "Gift note included."),
  order("o-1009", "Camille Stone", "p-001", 1, "Offline", dateDaysAgo(8), "Paid", "Picked up", "pickup", "Pop-up event."),
  order("o-1010", "Evan Moore", "p-003", 4, "Other", dateDaysAgo(9), "Paid", "Delivered", "digital", "Bundle promo."),
  order("o-1011", "Rina Walsh", "p-006", 2, "Etsy", dateDaysAgo(12), "Paid", "Shipped", "shipping", "Repeat customer."),
  order("o-1012", "Theo Garcia", "p-002", 1, "Manual", dateDaysAgo(14), "Unpaid", "On hold", "undecided", "Invoice sent."),
];

const checklistItems = [
  "Review new orders",
  "Check low-stock products",
  "Update product availability",
  "Confirm shipping / pickup orders",
  "Review best sellers",
  "Export weekly report",
];

let checklistState = checklistItems.map((label, index) => ({ label, done: index < 2 }));
const initialProducts = cloneData(products);
const initialOrders = cloneData(orders);

function order(id, customerName, productId, quantity, salesChannel, orderDate, paymentStatus, fulfillmentStatus, deliveryMethod, notes) {
  return {
    id,
    customerName,
    productId,
    quantity,
    salesChannel,
    orderDate,
    paymentStatus,
    fulfillmentStatus,
    deliveryMethod,
    notes,
  };
}

const dollars = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

function cloneData(value) {
  return JSON.parse(JSON.stringify(value));
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dateDaysAgo(days) {
  const date = new Date(today);
  date.setDate(today.getDate() - days);
  return formatDate(date);
}

function productById(id) {
  return products.find((product) => product.id === id);
}

function getWeeklyOrders() {
  const weekStart = new Date(today);
  weekStart.setDate(today.getDate() - 6);
  return orders.filter((item) => new Date(`${item.orderDate}T12:00:00`) >= weekStart);
}

function getProductRevenue(item) {
  const product = productById(item.productId);
  return product ? product.salePrice * item.quantity : 0;
}

function getAlerts() {
  return {
    lowStock: products.filter((product) => product.currentStock > 0 && product.currentStock <= product.lowStockThreshold),
    outStock: products.filter((product) => product.currentStock === 0),
    stale: products.filter((product) => daysSince(product.lastUpdated) > 21),
  };
}

function daysSince(dateString) {
  const then = new Date(`${dateString}T12:00:00`);
  return Math.round((today - then) / 86400000);
}

function summarizeOrders(items) {
  const productCounts = new Map();
  const channelCounts = new Map();
  let revenue = 0;

  for (const item of items) {
    revenue += getProductRevenue(item);
    const product = productById(item.productId);
    productCounts.set(product?.name || "Unknown", (productCounts.get(product?.name || "Unknown") || 0) + item.quantity);
    channelCounts.set(item.salesChannel, (channelCounts.get(item.salesChannel) || 0) + item.quantity);
  }

  return {
    revenue,
    bestProduct: topEntry(productCounts),
    bestChannel: topEntry(channelCounts),
  };
}

function topEntry(map) {
  if (!map.size) return { label: "-", value: 0 };
  const [label, value] = [...map.entries()].sort((a, b) => b[1] - a[1])[0];
  return { label, value };
}

function render() {
  const weeklyOrders = getWeeklyOrders();
  const weekly = summarizeOrders(weeklyOrders);
  const alerts = getAlerts();

  setText("metricOrders", weeklyOrders.length);
  setText("metricOrderDelta", `${weeklyOrders.reduce((sum, item) => sum + item.quantity, 0)} items ordered`);
  setText("metricRevenue", dollars.format(weekly.revenue));
  setText("metricLowStock", alerts.lowStock.length);
  setText("metricOutStock", alerts.outStock.length);
  setText("metricNeedsUpdate", alerts.stale.length);
  setText("bestProduct", `${weekly.bestProduct.label} (${weekly.bestProduct.value})`);
  setText("bestChannel", `${weekly.bestChannel.label} (${weekly.bestChannel.value})`);
  setText("openFulfillment", `${orders.filter((item) => !["Shipped", "Picked up", "Delivered"].includes(item.fulfillmentStatus)).length} orders`);
  setText("pendingPayment", `${orders.filter((item) => ["Pending", "Unpaid"].includes(item.paymentStatus)).length} orders`);

  renderChecklist();
  renderChannelMix();
  renderProducts();
  renderOrders();
  renderAlerts(alerts);
  renderWeeklyReport(weeklyOrders, weekly, alerts);
  populateFormOptions();
}

function setText(id, value) {
  document.getElementById(id).textContent = value;
}

function renderChecklist() {
  const root = document.getElementById("checklist");
  root.innerHTML = checklistState
    .map(
      (item, index) => `
        <label class="check-item">
          <input type="checkbox" data-check="${index}" ${item.done ? "checked" : ""} />
          <span>${item.label}</span>
        </label>
      `,
    )
    .join("");
}

function renderChannelMix() {
  const counts = new Map(salesChannels.map((channel) => [channel, 0]));
  for (const item of getWeeklyOrders()) counts.set(item.salesChannel, (counts.get(item.salesChannel) || 0) + item.quantity);
  const max = Math.max(1, ...counts.values());
  document.getElementById("channelMix").innerHTML = [...counts.entries()]
    .filter(([, value]) => value > 0)
    .sort((a, b) => b[1] - a[1])
    .map(
      ([channel, value]) => `
        <div class="channel-row">
          <strong>${channel}</strong>
          <small>${value} items this week</small>
          <div class="bar"><span style="width:${Math.max(8, (value / max) * 100)}%"></span></div>
        </div>
      `,
    )
    .join("");
}

function renderProducts() {
  const query = document.getElementById("productSearch").value.trim().toLowerCase();
  const filter = document.getElementById("stockFilter").value;
  const rows = products
    .filter((product) => {
      const text = `${product.name} ${product.sku} ${product.category}`.toLowerCase();
      const matchesSearch = !query || text.includes(query);
      const matchesFilter =
        filter === "all" ||
        (filter === "low" && product.currentStock > 0 && product.currentStock <= product.lowStockThreshold) ||
        (filter === "out" && product.currentStock === 0) ||
        (filter === "stale" && daysSince(product.lastUpdated) > 21);
      return matchesSearch && matchesFilter;
    })
    .map((product) => {
      const stockClass = product.currentStock === 0 ? "danger" : product.currentStock <= product.lowStockThreshold ? "warn" : "ok";
      const stockLabel = product.currentStock === 0 ? "Out" : product.currentStock <= product.lowStockThreshold ? "Low" : "Healthy";
      return `
        <tr>
          <td>
            <div class="product-cell">
              <img src="${product.photoUrl}" alt="${product.name}" />
              <div><strong>${product.name}</strong><br /><small>${product.description}</small></div>
            </div>
          </td>
          <td>${product.sku}</td>
          <td>${product.category}</td>
          <td><div class="chips">${product.activeSalesChannels.map((channel) => `<span class="chip">${channel}</span>`).join("")}</div></td>
          <td>${dollars.format(product.costPrice)}</td>
          <td>${dollars.format(product.salePrice)}</td>
          <td><span class="status-pill ${stockClass}">${stockLabel}: ${product.currentStock}</span><br /><small>Threshold ${product.lowStockThreshold}</small></td>
          <td>${product.lastUpdated}<br /><small>${daysSince(product.lastUpdated)} days ago</small></td>
        </tr>
      `;
    })
    .join("");
  document.getElementById("productRows").innerHTML = rows || `<tr><td colspan="8">No products match this view.</td></tr>`;
}

function renderOrders() {
  document.getElementById("orderRows").innerHTML = [...orders]
    .sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate))
    .map((item) => {
      const product = productById(item.productId);
      return `
        <tr>
          <td>${item.orderDate}</td>
          <td>${item.customerName}</td>
          <td>${product?.name || "Unknown"}</td>
          <td>${item.quantity}</td>
          <td><span class="chip">${item.salesChannel}</span></td>
          <td><span class="status-pill ${item.paymentStatus === "Paid" ? "ok" : "warn"}">${item.paymentStatus}</span><br /><small>${item.fulfillmentStatus}</small></td>
        </tr>
      `;
    })
    .join("");
}

function renderAlerts(alerts) {
  renderAlertList("lowStockList", alerts.lowStock, (product) => `${product.currentStock} left; threshold is ${product.lowStockThreshold}.`);
  renderAlertList("outStockList", alerts.outStock, () => "No sellable stock remains.");
  renderAlertList("staleList", alerts.stale, (product) => `Last updated ${daysSince(product.lastUpdated)} days ago.`);
}

function renderAlertList(id, items, detail) {
  document.getElementById(id).innerHTML =
    items
      .map(
        (product) => `
          <div class="alert-item">
            <strong>${product.name}</strong>
            <span>${product.sku}</span><br />
            <small>${detail(product)}</small>
          </div>
        `,
      )
      .join("") || `<p class="helper">Nothing to review in this group.</p>`;
}

function renderWeeklyReport(weeklyOrders, weekly, alerts) {
  const units = weeklyOrders.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("weeklySummary").innerHTML = `
    <div class="report-card"><span>Total orders this week</span><strong>${weeklyOrders.length}</strong><p class="helper">${units} units sold</p></div>
    <div class="report-card"><span>Total revenue this week</span><strong>${dollars.format(weekly.revenue)}</strong><p class="helper">Based on product sale prices</p></div>
    <div class="report-card"><span>Best-selling product</span><strong>${weekly.bestProduct.label}</strong><p class="helper">${weekly.bestProduct.value} units</p></div>
    <div class="report-card"><span>Best sales channel</span><strong>${weekly.bestChannel.label}</strong><p class="helper">${weekly.bestChannel.value} units</p></div>
    <div class="report-card"><span>Low-stock products</span><strong>${alerts.lowStock.length}</strong><p class="helper">${alerts.lowStock.map((item) => item.name).join(", ")}</p></div>
    <div class="report-card"><span>Products needing update</span><strong>${alerts.stale.length}</strong><p class="helper">${alerts.stale.map((item) => item.name).join(", ")}</p></div>
  `;
}

function populateFormOptions() {
  const form = document.getElementById("orderForm");
  populateSelect(form.productId, products, (product) => product.id, (product) => `${product.name} (${product.currentStock} in stock)`);
  populateSelect(form.salesChannel, salesChannels);
  populateSelect(form.paymentStatus, paymentStatuses);
  populateSelect(form.fulfillmentStatus, fulfillmentStatuses);
  populateSelect(form.deliveryMethod, deliveryMethods);
  if (!form.orderDate.value) form.orderDate.value = formatDate(today);
}

function populateSelect(select, values, getValue = (value) => value, getLabel = (value) => value) {
  const current = select.value;
  select.innerHTML = values.map((value) => `<option value="${getValue(value)}">${getLabel(value)}</option>`).join("");
  if ([...select.options].some((option) => option.value === current)) select.value = current;
}

function addOrder(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  const product = productById(data.productId);
  const quantity = Number(data.quantity);
  const warning = document.getElementById("orderWarning");

  if (!product) {
    warning.textContent = "Choose a valid product.";
    return;
  }

  if (quantity > product.currentStock && product.currentStock !== 999) {
    warning.textContent = `Only ${product.currentStock} units are available for ${product.name}.`;
    return;
  }

  product.currentStock = Math.max(0, product.currentStock - quantity);
  product.lastUpdated = data.orderDate;
  orders.unshift({
    id: `o-${Date.now()}`,
    customerName: data.customerName,
    productId: data.productId,
    quantity,
    salesChannel: data.salesChannel,
    orderDate: data.orderDate,
    paymentStatus: data.paymentStatus,
    fulfillmentStatus: data.fulfillmentStatus,
    deliveryMethod: data.deliveryMethod,
    notes: data.notes,
  });

  warning.textContent = "";
  form.reset();
  form.orderDate.value = formatDate(today);
  render();
}

function resetDemoData() {
  products = cloneData(initialProducts);
  orders = cloneData(initialOrders);
  checklistState = checklistItems.map((label, index) => ({ label, done: index < 2 }));
  document.getElementById("importStatus").textContent = "";
  document.getElementById("orderWarning").textContent = "";
  document.getElementById("orderForm").reset();
  render();
}

function exportCsv(type) {
  const alerts = getAlerts();
  const weeklyOrders = getWeeklyOrders();
  const weekly = summarizeOrders(weeklyOrders);
  let filename = `${type}.csv`;
  let rows = [];

  if (type === "products") {
    rows = products.map((product) => ({
      ...product,
      activeSalesChannels: product.activeSalesChannels.join("|"),
    }));
  }

  if (type === "orders") {
    rows = orders.map((item) => ({
      ...item,
      product: productById(item.productId)?.name || "",
      revenue: getProductRevenue(item),
    }));
  }

  if (type === "summary") {
    filename = "weekly-summary.csv";
    rows = [
      { metric: "totalOrdersThisWeek", value: weeklyOrders.length },
      { metric: "totalRevenueThisWeek", value: weekly.revenue },
      { metric: "bestSellingProduct", value: weekly.bestProduct.label },
      { metric: "bestSalesChannel", value: weekly.bestChannel.label },
      { metric: "lowStockProducts", value: alerts.lowStock.map((item) => item.name).join("|") },
      { metric: "productsNeedingUpdate", value: alerts.stale.map((item) => item.name).join("|") },
    ];
  }

  download(filename, toCsv(rows));
}

function toCsv(rows) {
  if (!rows.length) return "";
  const headers = Object.keys(rows[0]);
  const escape = (value) => `"${String(value ?? "").replaceAll('"', '""')}"`;
  return [headers.join(","), ...rows.map((row) => headers.map((header) => escape(row[header])).join(","))].join("\n");
}

function download(filename, content) {
  const blob = new Blob([content], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function parseCsvLine(line) {
  const values = [];
  let current = "";
  let quoted = false;
  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    if (char === '"' && line[index + 1] === '"') {
      current += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      values.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  values.push(current);
  return values;
}

function importProducts(file) {
  const reader = new FileReader();
  reader.onload = () => {
    const lines = String(reader.result).trim().split(/\r?\n/);
    const headers = parseCsvLine(lines.shift()).map((header) => header.trim());
    const imported = lines.map((line, index) => {
      const values = parseCsvLine(line);
      const record = Object.fromEntries(headers.map((header, position) => [header, values[position]]));
      return {
        id: `import-${Date.now()}-${index}`,
        name: record.name,
        sku: record.sku,
        category: record.category,
        photoUrl: record.photoUrl,
        description: record.description,
        costPrice: Number(record.costPrice),
        salePrice: Number(record.salePrice),
        currentStock: Number(record.currentStock),
        lowStockThreshold: Number(record.lowStockThreshold),
        activeSalesChannels: String(record.activeSalesChannels || "").split("|").filter(Boolean),
        lastUpdated: record.lastUpdated,
      };
    });
    products = imported.filter((item) => item.name && item.sku);
    document.getElementById("importStatus").textContent = `Imported ${products.length} products.`;
    render();
  };
  reader.readAsText(file);
}

document.querySelectorAll(".tab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
    document.querySelectorAll(".panel").forEach((panel) => panel.classList.remove("active"));
    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});

document.addEventListener("click", (event) => {
  const exportButton = event.target.closest("[data-export]");
  if (exportButton) exportCsv(exportButton.dataset.export);
});

document.addEventListener("change", (event) => {
  if (event.target.matches("[data-check]")) {
    checklistState[Number(event.target.dataset.check)].done = event.target.checked;
  }
});

document.getElementById("productSearch").addEventListener("input", renderProducts);
document.getElementById("stockFilter").addEventListener("change", renderProducts);
document.getElementById("orderForm").addEventListener("submit", addOrder);
document.getElementById("resetDemo").addEventListener("click", resetDemoData);
document.getElementById("csvImport").addEventListener("change", (event) => {
  const [file] = event.target.files;
  if (file) importProducts(file);
});

render();
