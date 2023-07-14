const mapping: Record<string, string> = {
  'lottery-results': 'lottery_result',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
