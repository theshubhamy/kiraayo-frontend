#!/bin/bash
mkdir -p public/images

echo "Copying generated equipment images..."
cp "/Users/shubham/.gemini/antigravity-ide/brain/5458f826-ed17-4c96-a176-44a9154eb6f4/excavator_tata_hitachi_1782283636045.png" public/images/excavator.png
cp "/Users/shubham/.gemini/antigravity-ide/brain/5458f826-ed17-4c96-a176-44a9154eb6f4/jcb_backhoe_loader_1782283652138.png" public/images/jcb.png
cp "/Users/shubham/.gemini/antigravity-ide/brain/5458f826-ed17-4c96-a176-44a9154eb6f4/sany_crawler_crane_1782283669463.png" public/images/crane.png
cp "/Users/shubham/.gemini/antigravity-ide/brain/5458f826-ed17-4c96-a176-44a9154eb6f4/concrete_pump_1782283687391.png" public/images/pump.png
cp "/Users/shubham/.gemini/antigravity-ide/brain/5458f826-ed17-4c96-a176-44a9154eb6f4/vibratory_roller_1782283707495.png" public/images/roller.png
cp "/Users/shubham/.gemini/antigravity-ide/brain/5458f826-ed17-4c96-a176-44a9154eb6f4/mahindra_earthmaster_1782283725564.png" public/images/earthmaster.png

echo "All images copied successfully!"
ls -la public/images
