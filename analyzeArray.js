export default function analyzeArray(arr) {
    const res = {
        average: 0,
        min: arr[0],
        max: arr[0],
        length: null,
    };

    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number') {
                res.average += arr[i];
                res.min = Math.min(arr[i], res.min);
                res.max = Math.max(arr[i], res.max);
            } else {
                return null
            }

        }
        res.length = arr.length;
        res.average = res.average / res.length;
        return res
    }
    return null
}