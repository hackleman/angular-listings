import { RouteReuseStrategy, DetachedRouteHandle, ActivatedRouteSnapshot } from "@angular/router";

interface StoredRoute {
    handle: DetachedRouteHandle,
    timestamp: number;
}

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
    storedRoutes = new Map<string, StoredRoute>();
    expirationTime = 20 * 1000;

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return true;
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
        console.log("Storing route", route.routeConfig?.path === "" ? 'Home' : route.routeConfig?.path || '', handle, this.storedRoutes);
        if (handle) {
            this.storedRoutes.set(route.routeConfig?.path || '', {
                handle,
                timestamp: Date.now()
            })
            console.log("Stored route", route.routeConfig?.path === "" ? 'Home' : route.routeConfig?.path || '');
        } else {
            console.log("Route not stored",  route.routeConfig?.path === "" ? 'Home' : route.routeConfig?.path || '')
        }
    }
    
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        const storedRoute = this.storedRoutes.get(route.routeConfig?.path || "");
        console.log("shouldAttach", route.routeConfig?.path === "" ? 'Home' : route.routeConfig?.path || '', storedRoute, this.storedRoutes)
        if (storedRoute) {
            const elapsedTime = Date.now() - storedRoute.timestamp;
            if (elapsedTime < this.expirationTime) {
                console.log("shouldAttach: TRUE");
                return true;
            } else {
                this.storedRoutes.delete(route.routeConfig?.path || '')
                console.log("Deleted route", route.routeConfig?.path === "" ? 'Home' : route.routeConfig?.path || '');
            }
        }
        console.log("shouldAttach: FALSE");
        return false;
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
        const storedRoute = this.storedRoutes.get(route.routeConfig?.path || '') || null;
        console.log("Retrieving", route.routeConfig?.path === "" ? 'Home' : route.routeConfig?.path || '', storedRoute);
        return storedRoute ? storedRoute.handle : null;
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        console.log("Reusing routes", future.routeConfig, curr.routeConfig)
        return future.routeConfig === curr.routeConfig;
    }
}