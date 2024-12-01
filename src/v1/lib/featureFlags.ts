export type FeatureFlagName = keyof typeof FEATURE_FLAGS;

export const FEATURE_FLAGS = {
  SIMPLE_FEATURE_FLAG:
    import.meta.env.VITE_SIMPLE_FEATURE_FLAG === "true" ? true : false,
} as const;
