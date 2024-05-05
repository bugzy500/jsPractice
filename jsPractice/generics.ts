function getFirstElement<ElementType>(arr: ElementType[]){
    return arr[0]
}

const nums = [1,2,3]

const firstNum = getFirstElement(nums)
const altFirstNum = getFirstElement<number>(nums)

console.log(firstNum, altFirstNum)


type ApiResponse<Data = Status> = {
    data: Data,
    isError: boolean
}

type User = {
    name: string,
    age: number
}

type Blog = {
    title: string
}

type Status = {
    status: number
}

type UserResponse = ApiResponse<User>
type BlogResponse = ApiResponse<Blog>

const response: UserResponse = {
    data : {
        name: 'Arpit',
        age: 27
    },
    isError: false
}

//default Api response to be status: number
const defResponse: ApiResponse = { // this can be over-ridden by using ApiResponse<{status: string}>
    data: {
        status: 200
    },
    isError: false
}