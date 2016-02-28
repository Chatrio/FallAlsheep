using UnityEngine;
using System.Collections;

public class Shoot : MonoBehaviour {

    public Transform shoot;
    public int force;


	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
        if (Input.GetButtonDown("Fire1")) 
        {
            Transform oneShoot = GameObject.Instantiate(shoot)as Transform;
            oneShoot.position = transform.position + Camera.main.transform.forward * 3;
            oneShoot.GetComponent<Rigidbody>().AddForce(Camera.main.transform.forward * force);
            oneShoot.rotation = Camera.main.transform.rotation;
        }
	}
}
