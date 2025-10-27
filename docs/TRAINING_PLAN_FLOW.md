# Training Plan Flow Architecture

## Current Issue
- TrainingPlanSetup exists but no success/hydration flow
- Need feedback system: "Too hard/too easy?"
- Missing training plan validation and adjustment

## Proposed Flow
1. **TrainingExplainer** → "Build Your Training Plan"
2. **TrainingPlanSetup** → User inputs race goals, pace, etc.
3. **TrainingPlanHydration** → "Hydrating your training plan..."
4. **TrainingPlanFeedback** → "Too hard/too easy?" adjustment options
5. **TrainingDashboard** → Final plan with adjustments

## Training Plan Components Needed
- **Base Phase** → Foundation building
- **Peak Phase** → Race-specific training  
- **Taper Phase** → Race week preparation
- **Recovery Phase** → Post-race recovery

## Utils Integration
- Check for existing cup system utilities
- Base/Peak/Taper logic
- Pace calculations
- Weekly mileage progression

## User Feedback System
- "This looks too hard" → Reduce intensity
- "This looks too easy" → Increase intensity  
- "Perfect" → Confirm plan
- "Adjust schedule" → Modify training days

## Next Steps
1. Create TrainingPlanHydration.jsx
2. Create TrainingPlanFeedback.jsx  
3. Integrate with existing utils
4. Connect to TrainingDashboard
