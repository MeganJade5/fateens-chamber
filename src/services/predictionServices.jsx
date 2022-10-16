const predictions = [
  {
    id: 1,
    description: "If you jump over the drain, you will have more luck",
    category_id: 1,
    created_at: "2022-01-11T01:33:50.019Z",
    updated_at: "2022-01-11T01:33:50.019Z",
    user_id: 1,
  },
  {
    id: 2,
    description: "Beware of the chicken in the back of the fridge",
    category_id: 1,
    created_at: "2022-01-11T01:33:50.019Z",
    updated_at: "2022-01-11T01:33:50.019Z",
    user_id: 1,
  },
  {
    id: 3,
    description: "Your long line represents the long life you will have",
    category_id: 1,
    created_at: "2022-01-11T01:33:50.019Z",
    updated_at: "2022-01-11T01:33:50.019Z",
    user_id: 1,
  },
  {
    id: 4,
    description: "There will be a four day working week",
    category_id: 1,
    created_at: "2022-01-11T01:33:50.019Z",
    updated_at: "2022-01-11T01:33:50.019Z",
    user_id: 1,
  },
];

function transformPrediction(prediction) {
  return {
    author: prediction.username,
    category: prediction.category,
    posted: prediction.posted,
    description: prediction.description,
  };
}

export async function getPredictions() {
  return predictions;
}

export async function getPrediction(id) {
  const prediction = predictions.find(
    (prediction) => prediction.id.toString() === id.String()
  );
  return prediction ? transformPrediction(prediction) : null;
}

export async function createPrediction(prediction) {
  return prediction;
}

export async function deletePrediction(id) {
  return id;
}

export async function updatePrediction(prediction) {
  return prediction;
}
