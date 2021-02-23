
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined || matrix.length === 0)
    {
        let emptyMas = [];
        return emptyMas;
    }
    else
    {
    let newMas = [];
    let kol = 0;
    for (let i=0; i<matrix.length; i++ )
    {
        if ( i % 2 == 0)
        {
        for (let j=0; j<matrix[i].length; j++, kol++)
        {
            newMas[kol]=matrix[i][j];
        }
      }
      else 
      {
          for ( let f =(matrix[i].length)-1; f>=0; f--, kol++)
          {
              newMas[kol]=matrix[i][f];
          }
      }
    }
    return newMas;
}
}
