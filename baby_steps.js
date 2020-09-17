let sum=Number(process.argv[2])
for(let i=3;i<process.argv.length;i++)
{
    sum+=Number(process.argv[i])
}
console.log(sum)
