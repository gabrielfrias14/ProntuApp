import { StyleSheet } from 'react-native';

export const registerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 40,
    paddingTop: 60,
    alignItems: 'center',
  },

  icone: {
    width: 130,
    height: 130,
    marginBottom: 10,
  },

  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  appTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#053388',
    marginBottom: 6,
  },

  appSubtitle: {
    fontSize: 17,
    color: '#666',
    textAlign: 'center',
  },

  description: {
    textAlign: 'center',
    fontSize: 15,
    color: '#777',
    lineHeight: 22,
    marginBottom: 35,
  },

  formContainer: {
    width: '100%',
  },

  inputContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
  },

  input: {
    height: 50,
    fontSize: 16,
    color: '#333',
    //outlineStyle: 'none',
    borderWidth: 0,
  },

  registerButton: {
    backgroundColor: '#053388',
    borderRadius: 12,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,

    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  registerButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },

  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },

  footerText: {
    color: '#777',
    fontSize: 14,
  },

  loginText: {
    color: '#053388',
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 14,
    lineHeight: 20,
  },
});