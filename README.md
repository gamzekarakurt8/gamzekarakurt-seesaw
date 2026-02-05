This project is a browser-based seesaw (teeter-totter) simulation built 
using vanilla JavaScript, HTML, and CSS. The goal is to visually demonstrate how 
balance changes depending on the position and weight of objects placed on the plank.
Users can click on different points of the plank to place randomly generated weights, 
and the seesaw rotates in real time according to a simplified torque calculation.

How It Works
Each object placed on the plank has:

- a *position* relative to the pivot  
- a *weight* value  

For every interaction:

1. The distance of each object from the pivot is calculated.  
2. Torque is computed using:

   torque = weight × distance

3. Left and right torques are summed separately.  
4. The torque difference determines the rotation angle of the plank.  
5. The angle is clamped to a safe visual range and applied using CSS transforms, while objects are counter-rotated to remain upright.


Architecture

- *Main simulation module*
  - Handles user interaction
  - Stores placed objects
  - Performs torque and balance calculations
  - Controls reset behavior

- *UI class*
  - Manages DOM rendering
  - Updates weight labels
  - Applies plank rotation and object counter-rotation
  - Clears the board when reset
 

Design Decisions

The simulation was designed to prioritize *clarity and interaction*
over full physical realism. Instead of implementing a complex physics engine, a simplified
torque-based balance model was chosen to keep the logic easy to follow
while still producing believable motion. The interaction model was intentionally minimal:
users directly place weights on the plank and receive immediate visual
feedback through smooth rotation and updated weight totals.


Trade-offs and Limitations

During development, the main challenge was balancing *simplicity* with
*believable motion*.

To keep the implementation understandable:

- A simplified torque formula was used instead of real-world physics.  
- The rotation angle was *clamped* to prevent extreme or unstable
  movement.  
- Random weight generation was preferred to keep the interaction focused
  on balance behavior rather than configuration.

Because of time constraints:

- Touch interaction is not implemented.  
- The physics model is intentionally approximate rather than fully
  realistic.

These decisions allowed the core simulation experience to remain clear
and responsive.


AI Assistance

AI tools were used in a limited manner for:

- small helper code suggestions  
- syntax guidance  
- debugging support  
- improving documentation clarity

