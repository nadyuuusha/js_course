const count = (search, strings) => {
    let substrings = strings.split("\n").map(str => str.trim()); 
    let occ = 0;
    substrings.forEach((substring) => {
      if (substring.includes(search)) {
        occ++;
      }
    });
    return occ;
  };
  
  const main = () => {
    let search = document.getElementById("search").value.trim();
    let strings = document.getElementById("strings").value.trim();
    let result = document.getElementById("result");
  
  
    let total = count(search, strings);
    result.innerHTML = `Количество строк, содержащих "${search}": ${total}`;
  };
  
  document.getElementById("submit").addEventListener("click", main);