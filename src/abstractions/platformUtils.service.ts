import { DeviceType } from '../enums/deviceType';

export interface PlatformUtilsService {
    getDevice(): DeviceType;
    getDeviceString(): string;
    isFirefox(): boolean;
    isChrome(): boolean;
    isEdge(): boolean;
    isOpera(): boolean;
    analyticsId(): string;
    getDomain(uriString: string): string;
    inSidebar(theWindow: Window): boolean;
    inTab(theWindow: Window): boolean;
    inPopout(theWindow: Window): boolean;
    inPopup(theWindow: Window): boolean;
    isViewOpen(): boolean;
}