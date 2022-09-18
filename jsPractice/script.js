var marksArray = [[78,89,67,78],[98,93,87,69],[88,77,83,80]]
//return an array with total marks of each student after deducting the marks for the subject with lowest class average.
function totalMarks(marksArray)
{
  
  const totalMarksArray = []
  var marks=0;
//logic to find total of each subject
  for(let i=0; i<marksArray[0].length;i++)
  {
    for(let j=0;j<marksArray.length;j++)
    {
      marks = marks + marksArray[j][i]
    }
    totalMarksArray[i]=marks
    marks=0
  }

  console.log(totalMarksArray)

//logic to find index of subject with lowest marks

  let minMarksIndex=0;
  let minMarks=totalMarksArray[0]
  for(let val in totalMarksArray)
  {
    //console.log(val)
    if(totalMarksArray[val]<minMarks)
    {
      minMarks=totalMarksArray[val]
      minMarksIndex=val
    }
  }
  console.log(minMarksIndex)

  const finalMarksArray = []
  let marksTotal=0
  for(let i=0;i<marksArray.length;i++)
  {
    for(let j=0;j<marksArray[0].length;j++)
    {
      if(j !== Number(minMarksIndex))
        marksTotal = marksTotal + marksArray[i][j]      
    }
    finalMarksArray[i] = marksTotal
    marksTotal=0
  }

  return finalMarksArray

}

const classResult = totalMarks(marksArray)

console.log(classResult)