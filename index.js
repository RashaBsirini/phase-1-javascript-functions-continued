// code your solution here
function saturdayFun(text='roller-skate')
{
    return "This Saturday, I want to " +text + "!";
}
function mondayWork(text='go to the office')
{
    return "This Monday, I will " +text + ".";
}
function wrapAdjective(text='*')
{
    return function (intext='special')
    {
        return "You are "+text + intext+ text + "!"
    }
    
}
