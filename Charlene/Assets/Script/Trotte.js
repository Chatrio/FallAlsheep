#pragma strict

/*private var pos0 : Vector3;
private var vspeed : float = 0f;
private var count = 0;
var gravity : float = 20f;

public var time: float; 
//public static var frameCount: int; 
//static private var lastRecalculation = -1;

function Start () {
	pos0 = transform.position;
	//GetComponent.<Animation>().CrossFade ("trottrotte",0.1f);	

}

function Update () {
	vspeed -= gravity * Time.deltaTime;
	//transform.Translate(vspeed * Time.deltaTime * Vector3(1,0,0));
	transform.Rotate(0,0.1*Time.deltaTime,0);
	transform.RotateAround(Vector3(154.799,4.394,299.82),Vector3.up,5*Time.deltaTime);

	}
	//GetComponent.<Animation>().CrossFade ("trottrotte",0.1f);
	//GetComponent.<Animation>().CrossFade ("Saut",0.1f);
}
*/
private var pos0 : Vector3;
private var vspeed : float = 0f;
var gravity : float = 20f;	

//public var trotte : AnimationClip;
//public var jump : AnimationClip;
 
 //private var trotteTime : float = 7.5;
 //private var trotteSpeed : float = .01f;
 //private var jumpTime : float = 3;
//private var jumpSpeed : float = 1.2;
 
 
 function Start () {
 pos0 = transform.position;

 }
 
 function Update () {


 vspeed -= gravity * Time.deltaTime;
	//transform.Translate(vspeed * Time.deltaTime * Vector3(1,0,0));
	transform.Rotate(0,0.1*Time.deltaTime,0);
	transform.RotateAround(Vector3(159.99,2.79,300.03),Vector3.up,5*Time.deltaTime);

	//if(GetComponent.<Animation>().Play("Saut"))


     /*trotteTime -= Time.deltaTime;
     if(trotteTime > 0.4)
     {
         GetComponent.<Animation>().Play("trottrotte");
     }
     if(trotteTime < 0.4)
     {
       GetComponent.<Animation>().Play("Saut");
       
     }
     if

     */
 }			