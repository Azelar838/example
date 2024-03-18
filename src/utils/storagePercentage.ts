const StoragePercentage = (size:any, max:any) => {
    if (max === '0') return 0;
    const newSize = ((size * 100) / max).toFixed(2);
    return newSize;
  };
  
  export default StoragePercentage;
  