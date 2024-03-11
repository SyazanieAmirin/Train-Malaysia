import csv
import json

# I made multiple name so easy to update if KTM update their schedule

# name = 'Pulau_Sebang_Batu_Caves_Weekday'
# name = 'Batu_Caves_Pulau_Sebang_Weekday'
# name = 'Pelabuhan_Klang_Tanjung_Malim_Weekday'
# name = 'Tanjung_Malim_Pelabuhan_Klang_Weekday'

# name = 'Pulau_Sebang_Batu_Caves_Weekend'
name = 'Batu_Caves_Pulau_Sebang_Weekend'
# name = 'Pelabuhan_Klang_Tanjung_Malim_Weekend'
# name = 'Tanjung_Malim_Pelabuhan_Klang_Weekend'


csv_file_path = 'CSV/' + name + '.csv'

# Read the CSV and add the data to a dictionary
schedule_dict = {}
with open(csv_file_path, mode='r', encoding='utf-8') as csvfile:
    csvreader = csv.reader(csvfile)
    headers = next(csvreader)[1:]  # Skip the first header
    for row in csvreader:
        station = row[0]
        times = row[1:]
        schedule_dict[station] = {str(i+1): time for i, time in enumerate(times)}

# Convert the dictionary to a JSON string
schedule_json = json.dumps(schedule_dict, indent=4, ensure_ascii=False)

# Define the path to the JSON file
json_file_path = 'JSON/KTM_Batu_Caves_Pulau_Sebang_Line/' + name + '.json'

# Write the JSON string to a file
with open(json_file_path, mode='w', encoding='utf-8') as jsonfile:
    jsonfile.write(schedule_json)

print('CSV has been converted to JSON and saved as ' + name + '.json')