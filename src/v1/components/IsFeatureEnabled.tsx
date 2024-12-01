import { ReactNode } from "react";
import { FEATURE_FLAGS, FeatureFlagName } from "../lib/featureFlags";

export function V1IsFeatureEnabled({
  featureFlag,
  children,
}: {
  featureFlag: FeatureFlagName;
  children: ReactNode;
}) {
  return FEATURE_FLAGS[featureFlag] ? children : null;
}
