import { Component, ElementRef, Renderer2, AfterViewInit, DoCheck, OnChanges, Input, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';
import { ClusterService } from '../../../services/cluster.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-money-preview',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './money-preview.component.html',
  styleUrl: './money-preview.component.scss'
})
export class MoneyPreviewComponent implements OnChanges {

  private _scene!: THREE.Scene;
  private _camera!: THREE.PerspectiveCamera;
  private _textureLoader!: THREE.TextureLoader;
  private _renderer!: THREE.WebGLRenderer;
  private _mesh!: THREE.Mesh;
  private _isCliked = false;

  @Input('currentMoneyId') moneyId : number = 0;

  constructor(private renderer2:Renderer2, private elRef:ElementRef, private clusterService :ClusterService){
    this._renderer = new THREE.WebGLRenderer();
    this._renderer.setSize( 700, 600 );
    this.renderer2.appendChild( this.elRef.nativeElement, this._renderer.domElement );

    this._renderer.domElement.addEventListener('pointermove', (event : MouseEvent)=>this.handleOnCanvasMove(event))
    this._renderer.domElement.addEventListener('pointerdown', ()=> {this._isCliked = true;})
    this._renderer.domElement.addEventListener('pointerup', ()=> {this._isCliked = false;})


    this._camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    this._textureLoader = new THREE.TextureLoader();

  }

  handleOnCanvasMove(event : MouseEvent){

    if(!this._isCliked){
      this._mesh.rotation.x += event.movementY * 0.014;
      this._mesh.rotation.y += event.movementX * 0.014;
 
    }else{
      this._mesh.rotation.z += event.movementX * 0.014;
    }
    this._renderer.render(this._scene, this._camera)
     
  }

  ngOnChanges(): void {

    if(this.moneyId){
  
    this.initialize3d();

    this.setTextures();
  
    this._scene.add(this._mesh)
    this._camera.position.set(0,0,7);
    this._mesh.rotation.x = 64;
    this._mesh.rotation.y = 1.5;

    this._renderer.render(this._scene, this._camera)

    }

  }
  initialize3d():void{
    this._scene = new THREE.Scene();
    this._scene .background = new THREE.Color( '#656CA5' );
 

    this.setLigthing();
  }

  handleCloseClick(){
    this.clusterService.selectedMoneyId.set(0);
    this.clusterService.closeDialog();
  }

  private setLigthing(): void {
      this._scene.add(new THREE.AmbientLight(0xffffff,1.1))
  }

  private setTextures():void {

    const frontPath = this.clusterService.moneyContext().texturePathFrontRevers;
    const backPath = this.clusterService.moneyContext().texturePathBackRevers;
    const frontTexture = this._textureLoader.load(frontPath);
    const backTexture = this._textureLoader.load(backPath);
  
  
    const material1 = new THREE.MeshStandardMaterial({
      map: frontTexture,
      metalness:0.7,
      roughness:0.3,
    })
  
    const material2 = new THREE.MeshStandardMaterial({
      map: backTexture,
      metalness:0.7,
      roughness:0.3,
    })

    const geometry = new THREE.CylinderGeometry(3.5,3.5,0.3,50);

    this._mesh = new THREE.Mesh(geometry,[material1,material1, material2])
  }
}
