public with sharing class BoatSearchResults {

    @AuraEnabled
    
    public static List<Boat__c> getBoats(String boatTypeId) {
        
        if(!String.isEmpty(boatTypeId)){

            Id boatId = Id.valueOf(boatTypeId);  

             return [
                SELECT Id, Name, BoatType__c, Contact__c, Picture__c
                FROM Boat__c
                WHERE Id = :boatId
        	];

        } else {
            
         	 return [
                SELECT Id, Name, BoatType__c, Contact__c, Picture__c
                FROM Boat__c
        	];
        }
    }
}
