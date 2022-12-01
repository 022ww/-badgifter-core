let device;
(async () => {
  if (typeof navigator === 'undefined') {
    device = 'nodejs_env';
  } else {
    const {
      DeviceUUID
    } = await import('./device-uuid.js');
    const du = new DeviceUUID().parse();
    const dua = [du.language, du.platform, du.os, du.cpuCores, du.colorDepth];
    device = du.hashMD5(dua.join(':'));
  }
  console.log(device);
})();
export default device;