const batteryBatches = [2, 4, 1, 4, 3, 8, 9];

const totalBatteries = batteryBatches.reduce(function(total, batches){
    return batches + total
    }
  )