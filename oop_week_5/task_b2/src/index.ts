const processSalesData = (sales: string[]): Map<string, Map<string, number>> => {
    const buyerMap = new Map<string, Map<string, number>>();
  
    sales.forEach(sale => {
      const [buyer, product, quantityStr] = sale.split(' ');
      const quantity = parseInt(quantityStr, 10);
  
      if (!buyerMap.has(buyer)) {
        buyerMap.set(buyer, new Map<string, number>());
      }
  
      const productMap = buyerMap.get(buyer)!;
      if (productMap.has(product)) {
        productMap.set(product, productMap.get(product)! + quantity);
      } else {
        productMap.set(product, quantity);
      }
    });
  
    return buyerMap;
  };
  
  const displaySalesData = (buyerMap: Map<string, Map<string, number>>): string => {
    const sortedBuyers = Array.from(buyerMap.keys()).sort(); 
    let result = '';
  
    sortedBuyers.forEach(buyer => {
      result += `${buyer}:\n`;
  
      const productMap = buyerMap.get(buyer)!;
      const sortedProducts = Array.from(productMap.keys()).sort(); 
  
      sortedProducts.forEach(product => {
        const quantity = productMap.get(product)!;
        result += `  ${product}: ${quantity}\n`;
      });
    });
  
    return result.trim();
  };
  
  document.getElementById('processButton')?.addEventListener('click', () => {
    const inputElement = document.getElementById('salesDataInput') as HTMLTextAreaElement;
    const salesData = inputElement.value.trim().split('\n').map(line => line.trim()).filter(line => line.length > 0);
  
    const buyerMap = processSalesData(salesData);
  
    const result = displaySalesData(buyerMap);
    const resultElement = document.getElementById('result') as HTMLPreElement;
    resultElement.textContent = result;
  });