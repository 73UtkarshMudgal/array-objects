import React, { useState } from "react";
import "./App.css";

// Utility Functions for Array and Object Processing:

// 1. Find the Second Largest Number in an Array
const secondLargestNumber = (arr) => {
  const uniqueArr = [...new Set(arr)];
  uniqueArr.sort((a, b) => b - a);
  return uniqueArr[1];
};

// 2. Remove Duplicates from an Array
const removeDuplicates = (arr) => {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
};

// 3. Flatten a Nested Array
const flattenArray = (arr) => {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      acc = acc.concat(flattenArray(val));
    } else {
      acc.push(val);
    }
    return acc;
  }, []);
};

// 4. Find the Intersection of Two Arrays
const intersectionOfArrays = (arr1, arr2) => {
  return arr1.filter(value => arr2.includes(value));
};

// 5. Find the Union of Two Arrays
const unionOfArrays = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2])];
};

// 6. Sort an Array Without Using Built-in Methods (Bubble Sort)
const bubbleSort = (arr) => {
  let sortedArr = [...arr];
  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < sortedArr.length - 1; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
      }
    }
  }
  return sortedArr;
};

// 7. Chunk an Array
const chunkArray = (arr, size) => {
  const chunked = [];
  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
};

// 8. Find the Most Frequent Element in an Array
const mostFrequentElement = (arr) => {
  const frequencyMap = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  const maxFreq = Math.max(...Object.values(frequencyMap));
  return Object.keys(frequencyMap).find(key => frequencyMap[key] === maxFreq);
};

// 9. Rotate an Array by K Steps
const rotateArray = (arr, k) => {
  const rotations = k % arr.length;
  return [...arr.slice(-rotations), ...arr.slice(0, arr.length - rotations)];
};

// 10. Find Missing Numbers in a Sequence
const findMissingNumbers = (arr) => {
  const completeArr = Array.from({ length: Math.max(...arr) }, (_, i) => i + 1);
  return completeArr.filter(num => !arr.includes(num));
};

// 11. Sort an Array of Objects by a Specific Key
const sortObjectsByKey = (arr, key) => {
  return arr.sort((a, b) => a[key] > b[key] ? 1 : -1);
};

// 12. Group Objects by a Property
const groupByProperty = (arr, key) => {
  return arr.reduce((acc, obj) => {
    const group = obj[key];
    if (!acc[group]) acc[group] = [];
    acc[group].push(obj);
    return acc;
  }, {});
};

// 13. Find the Object with the Maximum Value for a Key
const findMaxObject = (arr, key) => {
  return arr.reduce((maxObj, currentObj) => {
    return currentObj[key] > maxObj[key] ? currentObj : maxObj;
  });
};

// 14. Merge Two Arrays of Objects by a Common Key
const mergeArraysByKey = (arr1, arr2, key) => {
  const merged = [...arr1];
  arr2.forEach(obj => {
    const existingIndex = merged.findIndex(item => item[key] === obj[key]);
    if (existingIndex >= 0) {
      merged[existingIndex] = { ...merged[existingIndex], ...obj };
    } else {
      merged.push(obj);
    }
  });
  return merged;
};

// 15. Remove Objects with Duplicate Values for a Key
const removeDuplicatesByKey = (arr, key) => {
  const seen = new Set();
  return arr.filter(obj => {
    if (seen.has(obj[key])) {
      return false;
    } else {
      seen.add(obj[key]);
      return true;
    }
  });
};

// 16. Convert an Array of Objects into a Key-Value Map
const arrayToKeyValueMap = (arr, key) => {
  return arr.reduce((acc, obj) => {
    acc[obj[key]] = obj;
    return acc;
  }, {});
};

// 17. Count the Frequency of Properties in an Array of Objects
const countPropertyFrequency = (arr, key) => {
  return arr.reduce((acc, obj) => {
    acc[obj[key]] = (acc[obj[key]] || 0) + 1;
    return acc;
  }, {});
};

// 18. Filter an Array of Objects Based on Multiple Conditions
const filterObjectsByConditions = (arr, conditions) => {
  return arr.filter(obj =>
    Object.keys(conditions).every(key => obj[key] === conditions[key])
  );
};

// 19. Convert an Object to an Array of Key-Value Pairs
const objectToKeyValueArray = (obj) => {
  return Object.entries(obj);
};

// 20. Deep Clone a Nested Object
const deepCloneObject = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

const App = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Array of questions with corresponding outputs
  const questions = [
    {
      id: 1,
      question: "1. Find the Second Largest Number in an Array",
      output: `Second largest number is ${secondLargestNumber([10, 20, 4, 45, 99])}`
    },
    {
      id: 2,
      question: "2. Remove Duplicates from an Array",
      output: `Array without duplicates is ${JSON.stringify(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))}`
    },
    {
      id: 3,
      question: "3. Flatten a Nested Array",
      output: `Flattened array is ${JSON.stringify(flattenArray([1, [2, [3, [4]]]]))}`
    },
    {
      id: 4,
      question: "4. Find the Intersection of Two Arrays",
      output: `Intersection of arrays is ${JSON.stringify(intersectionOfArrays([1, 2, 3], [2, 3, 4]))}`
    },
    {
      id: 5,
      question: "5. Find the Union of Two Arrays",
      output: `Union of arrays is ${JSON.stringify(unionOfArrays([1, 2, 3], [3, 4, 5]))}`
    },
    {
      id: 6,
      question: "6. Sort an Array Without Using Built-in Methods",
      output: `Sorted array is ${JSON.stringify(bubbleSort([5, 2, 9, 1, 5, 6]))}`
    },
    {
      id: 7,
      question: "7. Chunk an Array",
      output: `Array in chunks of 2: ${JSON.stringify(chunkArray([1, 2, 3, 4, 5, 6], 2))}`
    },
    {
      id: 8,
      question: "8. Find the Most Frequent Element in an Array",
      output: `Most frequent element is ${mostFrequentElement([1, 2, 3, 3, 3, 4, 5])}`
    },
    {
      id: 9,
      question: "9. Rotate an Array by K Steps",
      output: `Rotated array by 2 steps: ${JSON.stringify(rotateArray([1, 2, 3, 4, 5], 2))}`
    },
    {
      id: 10,
      question: "10. Find Missing Numbers in a Sequence",
      output: `Missing numbers are ${JSON.stringify(findMissingNumbers([1, 2, 4, 6, 7]))}`
    },
    {
      id: 11,
      question: "11. Sort an Array of Objects by a Specific Key",
      output: `Sorted objects by age: ${JSON.stringify(sortObjectsByKey([{ name: "Alice", age: 25 }, { name: "Bob", age: 20 }], "age"))}`
    },
    {
      id: 12,
      question: "12. Group Objects by a Property",
      output: `Grouped by age: ${JSON.stringify(groupByProperty([{ name: "Alice", age: 25 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 30 }], "age"))}`
    },
    {
      id: 13,
      question: "13. Find the Object with the Maximum Value for a Key",
      output: `Object with max age: ${JSON.stringify(findMaxObject([{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }], "age"))}`
    },
    {
      id: 14,
      question: "14. Merge Two Arrays of Objects by a Common Key",
      output: `Merged objects: ${JSON.stringify(mergeArraysByKey([{ id: 1, name: "Alice" }], [{ id: 1, age: 25 }], "id"))}`
    },
    {
      id: 15,
      question: "15. Remove Objects with Duplicate Values for a Key",
      output: `Array without duplicate ids: ${JSON.stringify(removeDuplicatesByKey([{ id: 1, name: "Alice" }, { id: 1, name: "Bob" }, { id: 2, name: "Charlie" }], "id"))}`
    },
    {
      id: 16,
      question: "16. Convert an Array of Objects into a Key-Value Map",
      output: `Key-value map: ${JSON.stringify(arrayToKeyValueMap([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }], "id"))}`
    },
    {
      id: 17,
      question: "17. Count the Frequency of Properties in an Array of Objects",
      output: `Frequency count of names: ${JSON.stringify(countPropertyFrequency([{ name: "Alice" }, { name: "Bob" }, { name: "Alice" }], "name"))}`
    },
    {
      id: 18,
      question: "18. Filter an Array of Objects Based on Multiple Conditions",
      output: `Filtered objects: ${JSON.stringify(filterObjectsByConditions([{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }], { age: 25 }))}`
    },
    {
      id: 19,
      question: "19. Convert an Object to an Array of Key-Value Pairs",
      output: `Key-value pairs: ${JSON.stringify(objectToKeyValueArray({ a: 1, b: 2 }))}`
    },
    {
      id: 20,
      question: "20. Deep Clone a Nested Object",
      output: `Deep cloned object: ${JSON.stringify(deepCloneObject({ a: { b: 1, c: 2 } }))}`
    }
  ];

  // Function to toggle the output visibility
  const toggleOutput = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container">
      <h1 className="title">Array & Object Processing Problems</h1>
      <div className="question-list">
        {questions.map((q, index) => (
          <div key={q.id} className="question-item">
            <div className="question-text" onClick={() => toggleOutput(index)}>
              <strong>{q.question}</strong>
            </div>
            {openIndex === index && (
              <div className="output-box">
                <p><strong>Output:</strong> {q.output}</p>
              </div>
            )}
            <button
              className="toggle-btn"
              onClick={() => toggleOutput(index)}
            >
              {openIndex === index ? "Collapse" : "Show Output"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

