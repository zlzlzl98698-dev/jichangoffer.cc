import { primaryNavigation, type NavCategory } from '../config/navigation';
import { brandComparisons, type BrandComparisonPair, type PricingPlan } from '../data/brands';

/** Find parent Level-1 pillar navigation category by id or Chinese label. */
export function findPillarCategory(pillarLabelOrId: string): NavCategory | undefined {
  const normalized = pillarLabelOrId.trim();
  return primaryNavigation.find(
    (c) => c.label === normalized || c.id === normalized || c.href === normalized
  );
}

/** Return comparison pairs involving a given brand slug. */
export function findBrandComparisons(brandSlug: string): BrandComparisonPair[] {
  return brandComparisons.filter(
    (cmp) => cmp.brandASlug === brandSlug || cmp.brandBSlug === brandSlug
  );
}

/** Pick 4–5 representative plans across billing cycles when a brand has multiple tiers. */
export function pickRepresentativePlans(plans: PricingPlan[], limit = 5): PricingPlan[] {
  if (plans.length <= limit) return plans;
  const picked: PricingPlan[] = [];
  const seen = new Set<string>();
  const addPlan = (p: PricingPlan | undefined) => {
    if (!p || seen.has(p.name) || picked.length >= limit) return;
    seen.add(p.name);
    picked.push(p);
  };

  addPlan(plans.find((p) => p.billingCycle === 'annual'));
  addPlan(plans.find((p) => p.billingCycle === 'monthly'));
  addPlan(plans.find((p) => p.billingCycle === 'one-time'));
  for (const p of plans) {
    if (picked.length >= limit) break;
    addPlan(p);
  }
  return picked;
}

/** Format cost per GB for transparent pricing comparisons when trafficGb is verified. */
export function formatCostPerGb(plan: PricingPlan): string | null {
  if (!plan.trafficGb || plan.trafficGb <= 0) return null;
  if (plan.billingCycle === 'monthly') {
    return `约 ¥${(plan.priceCny / plan.trafficGb).toFixed(3)} / GB`;
  }
  if (plan.billingCycle === 'one-time') {
    return `约 ¥${(plan.priceCny / plan.trafficGb).toFixed(3)} / GB`;
  }
  if (plan.monthlyEquivalentCny) {
    return `满用约 ¥${(plan.monthlyEquivalentCny / plan.trafficGb).toFixed(3)} / GB`;
  }
  return null;
}
