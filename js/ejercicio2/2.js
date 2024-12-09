/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
    let result = "";
    let wrapper = ""
    let nameMaxLenght = names.at(0);
    
    for (let i = 0; i < names.length; i++) {
        if(names.at(i).length > nameMaxLenght.length){
            nameMaxLenght = names.at(i);
        }
    }

    for (let i = 0; i < names.length; i++) {
        result += `* ${names.at(i)+" ".repeat(nameMaxLenght.length - names.at(i).length+1)}*\n`   
    }

    wrapper = "*".repeat(nameMaxLenght.length+4);
    return `${wrapper}\n${result}${wrapper}`
  }


  let resultado = createFrame(['a', 'bb', 'ccc']);
  console.log(resultado);
// Expected result:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************