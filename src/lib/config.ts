export const config = {
 apiUrl: process.env.EXPO_PUBLIC_API_URL || '',
 supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL || '',
 supabaseKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || '',
 tileUrl: process.env.EXPO_PUBLIC_TILE_URL || '',
 tileAttribution: process.env.EXPO_PUBLIC_TILE_ATTRIBUTION || '<a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">© OpenStreetMap contributors</a>',
 routingUrl: process.env.EXPO_PUBLIC_ROUTING_URL || '',
 geocodingUrl: process.env.EXPO_PUBLIC_GEOCODING_URL || '',
};
export const isDemo = !config.apiUrl;
export const authConfigured = !!(config.supabaseUrl && config.supabaseKey);
