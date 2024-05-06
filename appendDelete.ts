function appendAndDelete(s: string, t: string, k: number): string {
    // Write your code here
    //convert s to t in k operations
    let appendOps = 0
    let deleteOps = 0
    let common = 0
    //let opsForEquality = [0,0] // case 1 [0]: till common delete and then append | case 2 [1]: remove whole and then append

    for(let i =0; i<Math.min(s.length,t.length); i++){
        if(s[i] == t[i])
            common++
        if(s[i] !== t[i])
            break
    }

    //console.log(common)

    deleteOps = s.length - common
    appendOps = t.length - common

   // console.log('sols',opsForEquality)

    if((deleteOps + appendOps) == k || (s.length + t.length) <= k)
        return 'Yes'
    else if(s.length >= common && (k-deleteOps + appendOps) % 2 == 0 && deleteOps+appendOps <=k)
        return 'Yes'
    else
        return 'No'

}

const res = appendAndDelete('aaaaaaaaaa','aaaaa',9) // => 5del,0app | 6del,1app | 7del,2app | 8del,3app  9-5%2

//const res3 = appendAndDelete('ash','ashley',11)

//const res2 = appendAndDelete('ashley','akh',9)

console.log(res)

//ash => ashley = 3 delops + 6 apops
//ashley => ash = 3 delops + 0 apops
//abc => abc = 3 delops + 3 apops (minimum)