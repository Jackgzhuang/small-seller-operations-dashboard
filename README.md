# Small Seller Operations Dashboard

A demo web app for small business owners who sell through social media, marketplaces, and their own website.

The app focuses on operations behind the selling process: product catalog, SKUs, stock levels, orders, channel mix, weekly reports, and a simple weekly checklist.

It intentionally does not include checkout, payment processing, customer login, or complex real-time ecommerce integrations.

## Features

- Product catalog with SKU, category, photo URL, pricing, stock, thresholds, channels, and last updated dates
- Sales channel labels for Instagram, Facebook, Shopify, WooCommerce, Amazon, Etsy, Manual, Offline, and Other
- Order entry that automatically reduces product stock
- Inventory alerts for low stock, out of stock, and products not updated recently
- Weekly sales summary with revenue, best product, best channel, low-stock products, and products needing update
- Weekly operations checklist
- CSV export for products, orders, and weekly summary
- Lightweight product CSV import
- Seed data with 8 products and 12 orders

## Run locally

Open `index.html` directly in a browser, or serve this folder with any static file server.

## Deploy

This is a zero-dependency static app and can be deployed directly to Vercel.
