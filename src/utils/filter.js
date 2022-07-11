const filter = (arr, type) =>{
    return type==="Games"
    ? arr.filter((item)=>item.category==="Games")
    :type==="Sci_Fi"
    ? arr.filter((item)=>item.category==="Sci_Fi")
    :type==="JavaScript"
    ? arr.filter((item)=>item.category==="JavaScript")
    :type==="Documentary"
    ? arr.filter((item)=>item.category==="Documentary")
    :type==="Saga"
    ? arr.filter((item)=>item.category==="Saga")
    :type==="Comedy"
    ? arr.filter((item)=>item.category==="Comedy")
    :type==="Podcasts"
    ? arr.filter((item)=>item.category==="Podcasts")
    :type==="Movies"
    ? arr.filter((item)=>item.category==="Movies")
    :arr
}

export default filter