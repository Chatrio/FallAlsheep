using UnityEngine;
using System.Collections;

public class Destruction : MonoBehaviour {
    float timeLapsedKill = 0;
    public float lifeTime = 3;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
        timeLapsedKill = timeLapsedKill + Time.deltaTime;
        if (timeLapsedKill >= lifeTime)
        {
            Destroy(gameObject);
        }
        
    }
}
