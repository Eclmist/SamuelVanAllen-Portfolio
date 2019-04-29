$(document).ready(function () { 

    $( document ).ajaxStop(function() {
        if (window.location.hash === '#about')
        {
            RenderCharts();
        }
    });


    function RenderCharts()
    {
        var ctx = $("#skillchart2")[0].getContext('2d');
        //"Unity3D", "Shaderlab/CG","OpenGL", "GLSL", "Unreal 4", ".NET", "C++", "C#", "Java" "ARMv7"
        var myChart = new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: ["Unity3D", "Shaderlab / CG", "Javascript", "Firebase",
                 "Unreal 4", ".NET Core", "C++", "C#", "Java", "Vue"],
                datasets: [{
                    data: [20, 15, 12, 10, 18, 10, 16, 20, 14, 18],
                    backgroundColor: [
                        'rgba(255, 240, 75, 0.2)',
                        'rgba(141, 232, 69, 0.2)',
                        'rgba(88, 255, 142, 0.2)',
                        'rgba(69, 231, 232, 0.2)',
                        'rgba(88, 148, 255, 0.2)',
                        'rgba(140, 89, 255, 0.2)',
                        'rgba(227, 81, 232, 0.2)',
                        'rgba(255, 108, 101, 0.2)',
                        'rgba(232, 140, 81, 0.2)',
                        'rgba(255, 208, 101, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 240, 75, 1)',
                        'rgba(141, 232, 69, 1)',
                        'rgba(88, 255, 142, 1)',
                        'rgba(69, 231, 232, 1)',
                        'rgba(88, 148, 255, 1)',
                        'rgba(140, 89, 255, 1)',
                        'rgba(227, 81, 232, 1)',
                        'rgba(255, 108, 101, 1)',
                        'rgba(232, 140, 81, 1)',
                        'rgba(255, 208, 101, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels:
                    {
                        fontColor: '#ddd'
                    }
                },
                animation: {
                    animateRotate: true,
                    animateScale: true,
                    duration: 2000
                },
                scale: {
                    gridLines:
                    {
                        color: 'rgba(255,255,255,0.1)',
                        drawTicks: false
                    },
                    ticks:
                    {
                        display:false
                    }
                },
                tooltips: {
                    multiKeyBackground: 'rgba(0,0,0,0.1)',
                }

            }
        });
    }
});
