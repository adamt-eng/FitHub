document.addEventListener('DOMContentLoaded', function ()
{
    Change();
});
function Change()
{
    const Video = document.getElementById('video');

    for (var i = 0; i < 6; i++)
    {
        if (document.getElementById('area').value === ["ASU - FOE", "1st Settlement", "Nasr City", "El Obour", "El Shorouk", "El Mokattam"][i])
        {
            Video.src = ["../Images/ASU_Gym.mp4", "../Images/BalanceGym.mp4", "../Images/H2O.mp4", "../Images/iKardio.mp4", "../Images/GoldsGym.mp4", "../Images/OceanGym.mp4"][i];
            document.getElementById('text').innerHTML = [
                "Facebook: @<a href='https://www.facebook.com/faculty.eng.asu/' target='_blank'>faculty.eng.asu</a><br/>Location: <a href='https://maps.app.goo.gl/FPHJ3W5ccTua9bSk9' target='_blank'>ASU - Faculty of Engineering",
                "Facebook: @<a href='https://www.instagram.com/balancegym_eg/' target='_blank'>balancegym_eg</a><br/>Location: <a href='https://maps.app.goo.gl/ko7iHBbRLtdkA54k9?g_st=ic' target='_blank'>Emerald Twin Plaza Branch",
                "Facebook: @<a href='https://www.facebook.com/H2O.GYM.Egypt.Official' target='_blank'>H2O.GYM.Egypt.Official</a><br/>Location: <a href='https://maps.app.goo.gl/qg7DtRJeqpKekhoT9' target='_blank'>H2O Gym",
                "Facebook: @<a href='https://www.facebook.com/ikardiogym/' target='_blank'>ikardiogym</a><br/>Instagram: @<a href='https://www.instagram.com/ikardiogym/' target='_blank'>ikardiogym</a><br/>Location: <a href='https://maps.app.goo.gl/6X9BzHBhuv6S1V4T7' target='_blank'>IKARDIO GYM",
                "Instagram: @<a href='https://www.instagram.com/goldsgym.elsherouk/' target='_blank'>goldsgym.elsherouk</a><br/>Location: <a href='https://maps.app.goo.gl/G51o6KL2avvDFi5TA' target='_blank'>Gold's Gym El Sherouk",
                "Instagram: @<a href='https://www.instagram.com/oceangym9/' target='_blank'>oceangym9</a><br/>Location: <a href='https://maps.app.goo.gl/3h14JKM9kREbRU3w9' target='_blank'>Ocean GYM"][i];
            Video.play();
            return;
        }
    }
}