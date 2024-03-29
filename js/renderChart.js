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
        var myChart = new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: ["Unity3D", "Shaderlab / CG", "OpenGL", "HLSL",
                 "Unreal 4", "DirectX12", "C++", "C#", "GLSL"],
                datasets: [{
                    data: [20, 15, 12, 18, 18, 18, 20, 18, 16],
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
