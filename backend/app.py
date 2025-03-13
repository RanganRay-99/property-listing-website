from flask import Flask, jsonify, request, abort
from flask_cors import CORS  # Import CORS
import json

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load property data from JSON file
with open('properties.json', 'r') as file:
    properties = json.load(file)

# Helper function to save data back to JSON (for POST, PUT, DELETE)
def save_data():
    with open('properties.json', 'w') as file:
        json.dump(properties, file, indent=4)

# Route to get all properties
@app.route('/api/properties', methods=['GET'])
def get_properties():
    return jsonify(properties)

# Route to get a single property by ID
@app.route('/api/properties/<int:id>', methods=['GET'])
def get_property(id):
    property = next((p for p in properties if p['id'] == id), None)
    if property is None:
        abort(404, description="Property not found")
    return jsonify(property)

# Route to add a new property
@app.route('/api/properties', methods=['POST'])
def add_property():
    if not request.json:
        abort(400, description="Invalid data: Must be JSON")

    new_property = {
        "id": len(properties) + 1,  # Auto-generate ID
        "name": request.json.get('name'),
        "price": request.json.get('price'),
        "location": request.json.get('location'),
        "bedrooms": request.json.get('bedrooms'),
        "bathrooms": request.json.get('bathrooms'),
        "image_url": request.json.get('image_url')
    }

    properties.append(new_property)
    save_data()  # Save updated data to JSON file
    return jsonify(new_property), 201

# Route to update an existing property
@app.route('/api/properties/<int:id>', methods=['PUT'])
def update_property(id):
    property = next((p for p in properties if p['id'] == id), None)
    if property is None:
        abort(404, description="Property not found")

    if not request.json:
        abort(400, description="Invalid data: Must be JSON")

    property['name'] = request.json.get('name', property['name'])
    property['price'] = request.json.get('price', property['price'])
    property['location'] = request.json.get('location', property['location'])
    property['bedrooms'] = request.json.get('bedrooms', property['bedrooms'])
    property['bathrooms'] = request.json.get('bathrooms', property['bathrooms'])
    property['image_url'] = request.json.get('image_url', property['image_url'])

    save_data()  # Save updated data to JSON file
    return jsonify(property)

# Route to delete a property
@app.route('/api/properties/<int:id>', methods=['DELETE'])
def delete_property(id):
    property = next((p for p in properties if p['id'] == id), None)
    if property is None:
        abort(404, description="Property not found")

    properties.remove(property)
    save_data()  # Save updated data to JSON file
    return jsonify({"message": "Property deleted successfully"})

# Error handler for 404
@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": str(error)}), 404

# Error handler for 400
@app.errorhandler(400)
def bad_request(error):
    return jsonify({"error": str(error)}), 400

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)