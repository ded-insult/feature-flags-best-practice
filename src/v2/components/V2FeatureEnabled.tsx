import { ReactNode } from "react";
import {
  canViewFeatureFlag,
  UserRole,
  V2FeatureFlagName,
} from "../lib/featureFlags";

export function V2FeatureEnabled({
  featureName,
  children,
  role,
}: {
  featureName: V2FeatureFlagName;
  children: ReactNode;
  role: UserRole;
}) {
  return canViewFeatureFlag(featureName, role) ? children : null;
}
