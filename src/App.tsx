import { V1Features } from "./V1Feature";
import { Stack } from "./ui/Stack";

import "./App.css";
import { Card } from "./ui/Card";
import { V2FeatureEnabled } from "./v2/components/V2FeatureEnabled";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <Stack horizontal gap={24}>
        <div>
          <h2>User role = user</h2>
          <V1Features />
        </div>

        <div>
          <h2>User role = admin</h2>
          <V2FeatureEnabled featureName="ADMIN_CARD_FEATURE" role="admin">
            <Card content="ONLY ADMIN CAN SEE" />
          </V2FeatureEnabled>

          <h2>User role = user</h2>
          <V2FeatureEnabled featureName="ADMIN_CARD_FEATURE" role="user">
            <Card content="ONLY ADMIN CAN SEE" />
          </V2FeatureEnabled>

          <h2>User role = analytic</h2>
          <V2FeatureEnabled featureName="ADMIN_CARD_FEATURE" role="analytic">
            <Card content="ONLY ADMIN CAN SEE" />
          </V2FeatureEnabled>
        </div>

        <div>
          <h2>USER PERCENT 50%</h2>
          <V2FeatureEnabled featureName="RANDOM_CARD_FEATURE" role="user">
            <Card content="ONLY 50% OF USER CAN SEE THIS CARD" />
          </V2FeatureEnabled>
        </div>
      </Stack>
    </>
  );
}

export default App;
