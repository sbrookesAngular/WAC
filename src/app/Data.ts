//Data.ts ---> DataInterface.ts
//imports in DataInterface object

import {DataInterface} from './DataInterface'

export const ADAPTERDATA:  DataInterface[] = [

    //commented out -> need to see how CMDlets data is imported and HTML rendered
    {
    //busKey: 'Bus Type', 
    busType: 'PCI Express',
    //driverNameKey: 'Driver Name', 
    driverName: 'elrexpress', 
    //driverVerKey: 'Driver Version', 
    driverVer: '12.18.11.0',
    //eTrackIDKey: 'ETrackID', 
    eTrackID: '0x80000584', 
    //locationKey: 'Location', 
    location: 'PCI Bus 130, device 0, function 0', 
    //medTypeKey: 'Media Type', 
    medType: 'Fiber', 
    //negLinkSpdKey: 'Negotiated Link Speed',
    negLinkSpd: 'Not Supported', 
    //negLinkWdthKey: 'Negotiated Link Width', 
    negLinkWdth: '4x', 
    //prtNumKey: 'Part Number', 
    prtNum: 'G15811-002', 
    //peaKey: 'Permanent Ethernet Address', 
    permEthAdd: '001B21A4BE0', 
    //prtKey: 'Port', 
    port: 'A',
    helpInfo: `This tab displays relevant detailed information about the currently selected adapter.
    <br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    }

]