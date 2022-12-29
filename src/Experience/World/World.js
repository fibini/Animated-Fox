import * as THREE from 'three';
import Experience from "../Experience.js";
import Environment from './Environment.js';
import Floor from './Floor.js';

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scence = this.experience.scene
        this.resources = this.experience.resources

        //Test mesh
        const testMesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshStandardMaterial()
        )
        this.scence.add(testMesh)
        
        //Waiting for resources
        this.resources.on('ready', () =>
        {
            // Setup
            this.floor = new Floor()
            this.environment = new Environment()
            
        })
    }
}