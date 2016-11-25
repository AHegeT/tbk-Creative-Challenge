# tbk-Creative-Challenge
Coding Challenge for tbk Creative

## This challenge involved creating a popup in two days with the following specifications:

- Make the design into a responsive popover. Account for all breakpoints between desktop (1200px) and mobile (320px). The popover should look good on all breakpoints.
- Make the popover and form accessible (AODA/WCAG). Keypoints: I must be able to navigate the popover via keyboard and I must be able to close it via keyboard too. Ensure the form is accessible too.
- The popover should display once a visitor has been on a website for 3 seconds. If the popover is closed, the popover should not deploy on any subsequent reloads/pageviews.
- There are two visual elements on the page that need to animate when the popover is scrolled: The chisel on the left needs to animate up slowly when the popover is scrolled down and the shavings on the right need to animate upwards slowly. Kind of like a neat parallax effect.

## Metrics for evaluation:

- How clean and simple your markup is
- How closely you abide by our coding standards which are available here: http://scottblinch.github.io/code-guide/
- The simplicity of the javascript code you will write
- The cleanliness of your scss files
- Your fidelity to the original psd
- Your attention to detail in making the design responsive.

## Results


### Note on scroll animation for the shavings
The instructions explained that both the chisel and the shaving should move up as the user scrolled down, however, the .psd file showed the shaving image located at the top of the page. I assumed this was its starting position. However, having both elements move in the same direction made the animation look a little stiff, so I decided instead to have one go up while the other goes down.
