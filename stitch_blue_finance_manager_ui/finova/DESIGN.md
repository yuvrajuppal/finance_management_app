---
name: Finova
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#747686'
  outline-variant: '#c4c5d7'
  surface-tint: '#2151da'
  primary: '#0037b0'
  on-primary: '#ffffff'
  primary-container: '#1d4ed8'
  on-primary-container: '#cad3ff'
  inverse-primary: '#b7c4ff'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#004f35'
  on-tertiary: '#ffffff'
  tertiary-container: '#006a48'
  on-tertiary-container: '#60eeb1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001551'
  on-primary-fixed-variant: '#0039b5'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.005em
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.005em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  numeric-metric:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system establishes an environment of institutional trust, precision, and clarity for modern wealth management and institutional-grade personal finance. Built upon a Corporate Modern foundation infused with clean architectural minimalism, the visual tone balances structural discipline with fluid digital efficiency.

The target audience spans high-net-worth individuals, active capital allocators, and modern tech-forward operators who demand immediate clarity without visual noise. Every interaction must evoke composure, security, and exactness. Visual elements favor pristine, high-luminance canvases accented with rich royal blues and slate structures, avoiding excessive ornamentation in favor of data legibility, refined typographic balance, and purposeful depth.

## Colors

The palette relies on a disciplined balance between luminous white fields, deep cobalt anchors, and slate structures. 

- **Primary & Interactive Blues**: `#1D4ED8` operates as the primary anchor for core actions, authoritative headers, and active states. `#2563EB` acts as an interactive hover and secondary accent. Soft ice tints (`#EFF6FF`, `#DBEAFE`) provide low-contrast backgrounds for active selections, selected table rows, and contextual badges.
- **Canvas & Neutral Surfaces**: Base canvas utilizes `#FFFFFF` for primary content modules and cards, framed over a foundational cool off-white background (`#F8FAFC`). Secondary framing, structural dividers, and elevated inputs use `#F1F5F9` and `#E2E8F0` to establish clean separation without heavy visual mass.
- **Typography & Structural Slates**: Headings and primary numerical values leverage `#0F172A` to deliver sharp contrast and readability. Body text, labels, and secondary metadata utilize `#334155` and `#64748B`.
- **Financial Status Indicators**: Credit values, positive yields, and performance gains employ `#10B981` (paired with `#ECFDF5` for subtle fills). Negative cash flows, debits, and alert states deploy soft crimson `#EF4444` (paired with `#FEF2F2` for warning containers).

## Typography

Plus Jakarta Sans provides geometric modernity balanced with open counters and balanced stroke weights, rendering data-dense views effortlessly readable.

- **Numerics & Currencies**: Financial data points require tabular figures (`font-variant-numeric: tabular-nums`) across all sizes to guarantee vertical decimal alignment within ledgers and portfolio tables.
- **Hierarchy & Weighting**: Bold weights (700) are reserved strictly for top-level aggregates (`display`, `headline-lg`, `numeric-metric`). Primary structural labels and table headers leverage `label-md` or `label-sm` set in Semi-Bold (600) with slight positive tracking to ensure fast visual parsing.
- **Scale Continuity**: Large heading elements scale down automatically on mobile devices to preserve horizontal line real estate for currency notation and account titles.

## Layout & Spacing

The layout model employs a fluid 12-column grid system built on an 8pt architectural rhythm, accommodating complex multi-metric financial dashboards.

- **Desktop (1024px and above)**: Full 12-column fluid grid with `2rem` outer page margins and `1.5rem` horizontal/vertical gutters. Dashboards typically follow asymmetric split divisions (e.g., 8 columns for interactive visualizers and tables, 4 columns for balance cards, action logs, and cash allocation).
- **Tablet (768px – 1023px)**: Reflows to an 8-column layout with `1.5rem` margins and `1rem` gutters. Side panels collapse beneath primary data visualizers.
- **Mobile (below 768px)**: 4-column layout utilizing a tight `1rem` canvas margin and `1rem` gutters. Multi-column metric summaries stack sequentially into vertical cards.
- **Component Spacing**: Internal card padding standardizes at `space-lg` (`1.5rem`), reducing to `space-md` (`1rem`) on compact views. Stacked financial line items maintain a consistent `space-sm` (`0.5rem`) gap.

## Elevation & Depth

Visual depth is achieved through ambient light diffusion and crisp, structural boundary lines rather than heavy drop shadows.

- **Low-Contrast Outlines**: Every card, table container, and input field is bounded by a crisp `1px` solid border (`#E2E8F0`). This anchors elements firmly against the `#F8FAFC` foundation.
- **Ambient Shadow System**:
  - *Base Cards & Modules*: `0 1px 3px 0 rgba(15, 23, 42, 0.03), 0 1px 2px -1px rgba(15, 23, 42, 0.03)`. Surfaces remain grounded and tactile.
  - *Hover & Interactive Surfaces*: Transitions to `0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -2px rgba(15, 23, 42, 0.05)`.
  - *Floating Menus, Drawers & Modals*: `0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)`.
- **Tonal Layering**: Modals and dropdowns sit atop pure white `#FFFFFF`, framed with `#CBD5E1`. Data visualizer tooltips use dark slate `#0F172A` with contrasting white typography to focus attention on instantaneous pointer values.

## Shapes

The design system standardizes on modern rounded corners (`0.5rem` / `8px` base) to project technical sophistication while remaining accessible and approachable.

- **Cards & Data Panels**: Structured with `rounded-lg` (`1rem` / `16px`) for clean frame balance across broad visual areas.
- **Inputs, Buttons & Table Cells**: Fixed at base `rounded` (`0.5rem` / `8px`), maintaining a consistent ergonomic click target.
- **Badges & Status Chips**: Explicitly deviate into full pill geometry (`9999px`) to visually differentiate metadata and categorical tags from interactive buttons and input modules.

## Components

### Buttons
- **Primary**: Solid royal blue (`#1D4ED8`) background, white text, 8px radius, height 40px, horizontal padding 16px. Hover state shifts to `#2563EB`. Active state tightens slightly (`transform: scale(0.99)`).
- **Secondary**: Crisp white background, `#E2E8F0` border, `#0F172A` text. Hover transitions background to `#F8FAFC` and border to `#CBD5E1`.
- **Tertiary / Ghost**: Transparent fill, `#334155` text. Hover adopts `#F1F5F9` surface.
- **Destructive**: Pale red `#FEF2F2` background, `#EF4444` text, bordered in `#FCA5A5`.

### Input Fields & Controls
- **Form Inputs**: Height 42px, background `#FFFFFF`, border `1px` solid `#CBD5E1`, 8px corner radius, text `#0F172A`. Inner label or placeholder `#64748B`. Focus state transitions border to `#2563EB` paired with an ambient ring: `box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15)`.
- **Checkboxes & Radios**: Standard 18px dimensions, `#CBD5E1` border, checked state transitions smoothly to solid `#1D4ED8` with a white check or radio icon.

### Chips & Badges
- **Status Pills**: Pill-shaped (`rounded-full`), height 24px, horizontal padding 10px, typography `label-sm`.
  - *Positive (Yield / Profit)*: `#ECFDF5` background, `#059669` text.
  - *Negative (Debit / Loss)*: `#FEF2F2` background, `#DC2626` text.
  - *Neutral / Pending*: `#F1F5F9` background, `#475569` text.
  - *Accent / Active*: `#EFF6FF` background, `#1D4ED8` text.

### Cards & Financial Visualizers
- **Financial Metric Card**: White canvas `#FFFFFF`, `1px` solid `#E2E8F0` border, 16px radius, `1.5rem` internal padding. Top row houses small uppercase label (`label-md`) and contextual menu icon; center houses prominent `numeric-metric` value; bottom row pairs positive/negative pill badges with comparative period descriptions.
- **Data Tables**: Clean row dividers (`1px` border bottom `#F1F5F9`). Header row set with `#F8FAFC` background, typography `label-md` in `#475569`. Hover on table row invokes subtle `#F8FAFC` tint. Numbers adhere strictly to tabular formatting.