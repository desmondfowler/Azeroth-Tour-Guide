import json

# Load the JSON data from a file 
with open('regions.json', 'r') as file:
    data = json.load(file)

# Renumber the IDs starting from 0
for i, region in enumerate(data['regions']):
    region['id'] = i

# Save the modified JSON back to a file 
with open('renumbered_regions.json', 'w') as file:
    json.dump(data, file, indent=4)

print("IDs have been renumbered starting from 0!")