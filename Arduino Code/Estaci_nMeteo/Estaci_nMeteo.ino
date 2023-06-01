
//Importamos las librerias necesarias para hacer funcionar nuestro proyecto
#include <LiquidCrystal.h>   
#include <DHT.h>      

//Definimos nuestro módulo DHT, en nuestro caso DHT11
#define DHTTYPE DHT11
//Definimos el pin donde se enviará la información del DHT11 al Arduino
const int DHTPin = 11;

//Definimos el módulo DHT y la pantalla LCD
DHT dht(DHTPin, DHTTYPE);
LiquidCrystal lcd(7,6,5,4,3,2);
 
void setup(){
  //Definimos los baudios, la pantala LCD  e iniciamos el sensor DHT de temperatura y humedad
   Serial.begin(9600);
   lcd.begin(16, 2);   
   dht.begin();        
}
 
void loop(){
   //Declaramos dos variables para la humedad y la temperatura
   float h = dht.readHumidity();
   float t = dht.readTemperature();
  //Realizamos una condición para plasmar en pantalla si hay algún problema con el módulo.
   if (isnan(h) || isnan(t)) {
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Problema Móduo DHT");
      return;
   }
   
  //Mostramos en pantalla la temperatura y la humedad
   lcd.clear();
   lcd.setCursor(0, 0);
   lcd.print("Grados: ");
   lcd.print(t);


   lcd.setCursor(0, 1);
   lcd.print("Humedad: ");
   lcd.print(h);
   lcd.print("%");
   delay(10);

  
}
