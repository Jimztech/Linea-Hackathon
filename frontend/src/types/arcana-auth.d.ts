// src/types/arcana-auth.d.ts
declare module '@arcana/auth' {
    export class AuthProvider {
      constructor(config: { appID: string });
      appId: string;
      loginWithTwitter: () => Promise<void>;
      // Add other methods and properties as needed
    }
    // Add other exports if they exist
}
  