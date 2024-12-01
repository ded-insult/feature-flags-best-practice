import { Card } from "./ui/Card";
import { V1IsFeatureEnabled } from "./v1/components/IsFeatureEnabled";

export function V1Features() {
  return (
    <V1IsFeatureEnabled featureFlag="SIMPLE_FEATURE_FLAG">
      <Card content="Тест V1 feature flag" />
    </V1IsFeatureEnabled>
  );
}
