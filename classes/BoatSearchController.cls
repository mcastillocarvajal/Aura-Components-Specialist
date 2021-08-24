public with sharing class BoatSearchController {

    @AuraEnabled
    
    public static List<BoatType__c> getBoatTypes() {
        
        return [
            SELECT Id, Name, OwnerId
            FROM BoatType__c
        ];
    }
}