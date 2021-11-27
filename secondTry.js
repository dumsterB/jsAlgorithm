function run() {
    let y = ploy()
    let fits = 0
    for (let n = 1; n < 11; n++) {
        let res = 0
        for (let i = 1; i < n + 1; i++) {
            let tmp1 = 1
            let tmp2 = 1
            for (let j = 1; j < n + 1; j++) {
                if (i == j) {
                    continue
                } else {
                    tmp1 *= (n + 1 - j)
                    tmp2 *= (i - j)
                }
            }
            res += tmp1 * y[i - 1] / tmp2
        }
        fits += res
        console.log(res)
    }
}

function ploy() {
    let coef = [1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1]
    let y = []
    for (let n = 1; n < 11; n++) {
        let res = 1
        let m = n
        for (let i = 1; i < 11; i++) {
            res = res + coef[i] * m
            m *= i
        }
        y.push(res)
    }
    console.log(y)
    return y
}

console.log(run(4))