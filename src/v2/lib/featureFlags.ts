export type V2FeatureFlagName = keyof typeof FEATURE_FLAGS;

export type UserRole = "admin" | "analytic" | "user";

interface FeatureFlagsRules {
  userPercentage?: number;
  userRole?: UserRole[];
}

export const FEATURE_FLAGS = {
  ADMIN_CARD_FEATURE: [{ userRole: ["admin"] }],
  ANALYTIC_CARD_FEATURE: [{ userRole: ["admin", "analytic"] }],
  RANDOM_CARD_FEATURE: [{ userPercentage: 0.5 }],
  USER_CARD_FEATURE: true,
} as const satisfies Record<string, FeatureFlagsRules[] | boolean>;

export function canViewFeatureFlag(feature: V2FeatureFlagName, user: UserRole) {
  if (Array.isArray(FEATURE_FLAGS[feature])) {
    return FEATURE_FLAGS[feature].some((rule) => checkRule(rule, user));
  }

  return FEATURE_FLAGS[feature];
}

export function checkRule(rule: FeatureFlagsRules, user: UserRole) {
  return isUserRoleIncluded(rule, user) && isUserInPercentage(rule);
}

export function isUserRoleIncluded(rule: FeatureFlagsRules, user: UserRole) {
  return rule.userRole === undefined || rule.userRole.includes(user);
}

// Better create algorithm for user.id as example
export function isUserInPercentage(rule: FeatureFlagsRules) {
  if (rule.userPercentage === undefined) return true;

  return rule.userPercentage < Math.random();
}
